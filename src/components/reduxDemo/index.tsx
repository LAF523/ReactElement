import { rootStore } from '@/stores';
import { Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useState } from 'react';
import { setUserInfo } from '@/stores/user';
const ReactDemo = () => {
  const user = useSelector((state: rootStore) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState<string>('');
  const handleClick = () => {
    dispatch(
      setUserInfo({
        name
      })
    );
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <>
      <p>{`展示输入的用户名:${user.name}`}</p>
      <Input onChange={handleChange} />
      <Button onClick={handleClick}>添加</Button>
    </>
  );
};

export default ReactDemo;
