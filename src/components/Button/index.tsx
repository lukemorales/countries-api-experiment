import { ButtonHTMLAttributes, useMemo } from 'react';

import OmniLoading from '@components/OmniLoading';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  loading?: boolean;
  icon?:
    | import('react').ElementType<import('react-icons').IconBaseProps>
    | JSX.Element;
}

const Button = (props: ButtonProps) => {
  const {
    title,
    onClick,
    icon: Icon,
    type = 'button',
    loading: isLoading = false,
    ...attrs
  } = props;

  const onClickHandler = isLoading ? () => null : onClick;

  const content = useMemo(() => {
    if (isLoading) {
      return <OmniLoading />;
    }

    if (Icon) {
      return (
        <>
          <span>{title}</span>
          {typeof Icon === 'function' ? <Icon size="1.25rem" /> : Icon}
        </>
      );
    }

    return title;
  }, [isLoading, Icon, title]);

  return (
    <S.Container type={type} onClick={onClickHandler} {...attrs}>
      {content}
    </S.Container>
  );
};

export default Button;
