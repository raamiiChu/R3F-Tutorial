import { ModeToggle } from "@/components/mode-toggle";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarItems } from "@/constants";
import { GithubButton } from "./github-button";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row justify-between">
        <ModeToggle />
        <GithubButton />
      </SidebarHeader>
      <SidebarContent>
        {sidebarItems.map(({ groupLabel, menus }) => {
          return (
            <SidebarGroup key={groupLabel}>
              <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menus.map(({ title, url, Icon, isBlank }) => (
                    <SidebarMenuItem key={title} title={title}>
                      <SidebarMenuButton asChild>
                        <a href={url} target={isBlank ? "_blank" : "_self"}>
                          <Icon />
                          <span>{title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
