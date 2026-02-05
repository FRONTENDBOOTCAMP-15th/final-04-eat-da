import Link from 'next/link';

type BottomFixedButtonProps =
  | {
      as: 'link';
      href: string;
      children: React.ReactNode;
    }
  | {
      as: 'button';
      type?: 'submit';
      formId: string;
      children: React.ReactNode;
    }
  | {
      as: 'button';
      type: 'button';
      onClick: () => void | Promise<void>;
      children: React.ReactNode;
      disabled?: boolean;
    };

export default function BottomFixedButton(props: BottomFixedButtonProps) {
  const className =
    'fixed bottom-0 w-full h-17 flex items-center justify-center pt-2 pb-2 text-white text-display-4 font-semibold bg-eatda-orange hover:opacity-90';

  if (props.as === 'link') {
    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    );
  }

  // 일반 클릭 버튼
  if (props.type === 'button') {
    const buttonClassName = props.disabled
      ? 'fixed bottom-0 w-full h-17 flex items-center justify-center pt-2 pb-2 text-gray-500 text-display-4 font-semibold bg-gray-300 cursor-not-allowed'
      : className;
    return (
      <button
        type="button"
        onClick={props.disabled ? undefined : props.onClick}
        className={buttonClassName}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
  }

  // 폼 제출 버튼
  return (
    <button type="submit" form={props.formId} className={className}>
      {props.children}
    </button>
  );
}
