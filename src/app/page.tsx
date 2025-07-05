import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8">
      <Container>
        <Button>
          hello world
        </Button>
        <Paragraph classNames="mt-8">
          This is a sample paragraph to demonstrate the use of the Paragraph component. It is styled with Tailwind CSS and can be customized with additional class names.
        </Paragraph>
        <SectionTitle>
          ghhvgbhjdgvdhj
        </SectionTitle>
        <SectionBadge>
          hello man! good day
        </SectionBadge>
      </Container>
    </main>
  );
}
