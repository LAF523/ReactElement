import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteEslint from 'vite-plugin-eslint';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

const envDir = path.join(process.cwd(), 'env');

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, envDir);
  return {
    base: env.VITE_BASE_URL,
    envDir,
    envPrefix: 'VITE_',
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.scss', '.css'],
      alias: {
        '@': path.resolve(__dirname, 'src') // 源文件根目录
      }
    },
    plugins: [
      react(),
      viteEslint({
        failOnError: false
      }),
      dynamicImportVars({
        //这里配置插件在那个文件夹内生效 这里是在router文件夹内生效
        include: ['layouts'],
        //这里是哪些文件夹内不生效
        // exclude: [],
        //插件在遇到错误时会退出构建过程。如果您将此选项设置为 true，它将引发警告，并且保持代码不变。
        warnOnError: false
      })
    ],
    css: {
      // 预处理器配置项
      preprocessorOptions: {
        less: {
          math: 'always',
          globalVars: {
            //配置全局变量
            test: '#1CC0FF'
          }
        }
      }
    },
    server: {
      open: true, // 自动打开浏览器
      port: 3000, // 服务端口
      proxy: {
        '/api': '', // api代理路径
        '/mock': '' // mock代理路径
      }
    }
  };
});
