import Link from "next/link";

interface ErrorMessage {
  description: string;
}
const ErrorMessage = ({ description }: ErrorMessage) => {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center">
      {description}
      <Link
        href="/"
        className="rounded-md border-2 border-black bg-gray-200 p-2"
      >
        Please Return Home
      </Link>
    </div>
  );
};
export default ErrorMessage;
