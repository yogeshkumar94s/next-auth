"use client";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
  // Accepts ReactNode as children to be flexible with what can be rendered inside the button.
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  // Optional asChild prop to support rendering the component with different HTML tags or components.
  asChild?: boolean;
}

// Define the LoginButton component with destructured props for cleaner access.
const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  // Use the useRouter hook to programmatically navigate.
  const router = useRouter();

  // Define the onClick handler for the button.
  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: Implement modal</span>;
  }

  return (
    <span onClick={onClick} className='cursor-pointer'>
      {children}
    </span>
  );
};

export default LoginButton;
