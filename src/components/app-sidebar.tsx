import { Home, Newspaper, Search, Settings, CircleQuestionMark } from "lucide-react"
import Link from "next/link"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ModeToggle } from "./ui/darkmodetoggle"

// Menu items.
const base_url = "http://localhost:3000/"
const items = [
    {
        title: "Home",
        url: base_url,
        icon: Home,
    },
    {
        title: "Feed",
        url: base_url + "feed",
        icon: Newspaper,
    },
    {
        title: "About",
        url: base_url + "about",
        icon: CircleQuestionMark,
    },
    {
        title: "Search",
        url: base_url + "search",
        icon: Search,
    },
    {
        title: "Settings",
        url: base_url + "settings",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Coltons Portfolio
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <ModeToggle />
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
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href={base_url + "login"}>login</Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}