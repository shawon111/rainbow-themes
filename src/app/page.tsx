import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8">
      <Button>
        hello world
      </Button>
      <Paragraph classNames="mt-8">
        This is a sample paragraph to demonstrate the use of the Paragraph component. It is styled with Tailwind CSS and can be customized with additional class names.
      </Paragraph>
    </main>
  );
}
