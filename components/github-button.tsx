import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { Button } from "./ui/button";

export const GithubButton = () => {
  return (
    <Button variant="link" size="icon" title="GitHub Repo">
      <Link href="https://github.com/raamiiChu/R3F-Tutorial" target="_blank">
        <SiGithub className="size-6" />
      </Link>
    </Button>
  );
};
