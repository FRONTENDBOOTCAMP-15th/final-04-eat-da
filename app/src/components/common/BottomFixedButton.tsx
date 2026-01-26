import Link from "next/link";

type BottomFixedButtonProps =
  | {
      as: "link";
      href: string;
      children: React.ReactNode;
    }
  | {
      as: "button";
      formId: string;
      children: React.ReactNode;
    };

export default function BottomFixedButton(props: BottomFixedButtonProps) {
  const className =
    "fixed bottom-0 w-full h-17 flex items-center justify-center pt-2 pb-2 text-white text-display-4 font-semibold bg-eatda-orange hover:opacity-90";

  if (props.as === "link") {
    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    );
  }

  return (
    <button type="submit" form={props.formId} className={className}>
      {props.children}
    </button>
  );
}
