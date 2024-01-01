import Button from './button';
import { ButtonProps } from './interface';
export default (props: ButtonProps) => {
  const { onClick, disabled = false } = props;
  return (
    <>
      <Button
        onClick={onClick}
        disabled={disabled}
      />
    </>
  );
};
