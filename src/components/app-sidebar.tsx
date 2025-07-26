import { Home, Newspaper, Search, Settings, CircleQuestionMark } from "lucide-react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
 
// Menu items.
const url = "http://localhost:3000/"
const items = [
  {
    title: "Home",
    url: url,
    icon: Home,
  },
    {
    title: "Feed",
    url: url + "feed",
    icon: Newspaper,
  },
  {
    title: "About",
    url: url + "about",
    icon: CircleQuestionMark,
  },
  {
    title: "Search",
    url: url + "search",
    icon: Search,
  },
  {
    title: "Settings",
    url: url + "settings",
    icon: Settings,
  },
]
 
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}