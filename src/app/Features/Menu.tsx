"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Algorithm Development",
    href: "/docs/primitives/alert-dialog",
    description:
      "Designing and optimizing algorithms for groundbreaking solutions in various fields.",
  },
  {
    title: "Software Tools",
    href: "/docs/primitives/hover-card",
    description:
      "Building user-friendly software for developing and running quantum applications",
  },
  {
    title: "Cloud Access",
    href: "/docs/primitives/progress",
    description:
      "Providing on-demand access to quantum computing power through the cloud.",
  },
  {
    title: "QaaS",
    href: "/docs/primitives/scroll-area",
    description: "Offering pay-per-use quantum computing resources for flexible access.",
  },
  {
    title: "Consulting",
    href: "/docs/primitives/tabs",
    description:
      "Guiding businesses in leveraging quantum technologies to solve complex challenges.",
  },
  {
    title: "Education & Training",
    href: "/docs/primitives/tooltip",
    description:
      "Empowering individuals and organizations with the knowledge and skills for the quantum era.",
  },
]

export function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-black">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md 
                    bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/doc.webp"
                  >
                    
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Documentaion
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Comprehensive documentation covering all aspects of QuantumCore's technology, APIs, and use cases.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
              A brief overview of QuantumCore and its mission
              </ListItem>
              <ListItem href="/docs/installation" title="Quickstart Guide">
              A concise guide with functionalities.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Community & Support">
              Information about the QuantumCore community and forums
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"