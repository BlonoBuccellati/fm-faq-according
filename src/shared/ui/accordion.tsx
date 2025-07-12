"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "@/shared/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}
type AccordionTriggerType = {
  icon: React.ReactNode;
};
function AccordionTrigger({
  icon,
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> &
  AccordionTriggerType) {
  return (
    <AccordionPrimitive.Header className="group divide-y">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex w-full items-center justify-between space-x-300 py-300 text-left transition-all outline-none hover:cursor-pointer disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
        <Slot>{icon}</Slot>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
      {...props}
    >
      <div className={cn(className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
