"use client";

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-2xl mx-auto space-y-2"
    >
      <AccordionItem value="item-1" variant="indicator">
        <AccordionHeader>
          <AccordionTrigger>What is this SMUI?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          A lightweight, reusable component library for React projects.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" variant="indicator">
        <AccordionHeader>
          <AccordionTrigger>Why use it?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          Developer fast create site with REUI components risparmiando tempo.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" variant="indicator">
        <AccordionHeader>
          <AccordionTrigger>When to use it?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          Ideal for React projects needing fast, consistent UI elements.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function Outline_Accordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-2xl mx-auto space-y-2"
    >
      <AccordionItem value="item-1" variant="outline">
        <AccordionHeader>
          <AccordionTrigger>What is this SMUI?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          A lightweight, reusable component library for React projects.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" variant="outline">
        <AccordionHeader>
          <AccordionTrigger>Why use it?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          Developer fast create site with REUI components risparmiando tempo.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" variant="outline">
        <AccordionHeader>
          <AccordionTrigger>When to use it?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          Ideal for React projects needing fast, consistent UI elements.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function Ghost_Accordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-2xl mx-auto space-y-2"
    >
      <AccordionItem value="item-1" variant="ghost">
        <AccordionHeader>
          <AccordionTrigger>What is this SMUI?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          A lightweight, reusable component library for React projects.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" variant="ghost">
        <AccordionHeader>
          <AccordionTrigger>Why use it?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          Developer fast create site with REUI components risparmiando tempo.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" variant="ghost">
        <AccordionHeader>
          <AccordionTrigger>When to use it?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          Ideal for React projects needing fast, consistent UI elements.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function Solid_Accordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-2xl mx-auto space-y-2"
    >
      <AccordionItem value="item-1" variant="solid">
        <AccordionHeader>
          <AccordionTrigger>What is this SMUI?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          A lightweight, reusable component library for React projects.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" variant="solid">
        <AccordionHeader>
          <AccordionTrigger>Why use it?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          Developer fast create site with REUI components risparmiando tempo.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" variant="solid">
        <AccordionHeader>
          <AccordionTrigger>When to use it?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          Ideal for React projects needing fast, consistent UI elements.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function Indicator_Accordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-2xl mx-auto space-y-2"
    >
      <AccordionItem value="item-1" variant="indicator">
        <AccordionHeader>
          <AccordionTrigger indicator="plus">
            What is this SMUI?
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          A lightweight, reusable component library for React projects.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" variant="indicator">
        <AccordionHeader>
          <AccordionTrigger indicator="plus">Why use it?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          Developer fast create site with REUI components risparmiando tempo.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" variant="indicator">
        <AccordionHeader>
          <AccordionTrigger indicator="plus">When to use it?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          Ideal for React projects needing fast, consistent UI elements.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function Nested_Accordion() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="w-full max-w-2xl mx-auto space-y-2"
    >
      <AccordionItem value="item-1" variant="outline">
        <AccordionHeader>
          <AccordionTrigger>What is this SMUI?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-2xl mx-auto space-y-2"
          >
            <AccordionItem value="item-1" variant="indicator">
              <AccordionHeader>
                <AccordionTrigger indicator="arrow">
                  What is this SMUI?
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent padded>
                A lightweight, reusable component library for React projects.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" variant="indicator">
              <AccordionHeader>
                <AccordionTrigger indicator="arrow">
                  Why use it?
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent padded>
                Developer fast create site with REUI components risparmiando
                tempo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" variant="outline">
        <AccordionHeader>
          <AccordionTrigger>Why use it?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          Developer fast create site with REUI components risparmiando tempo.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" variant="outline">
        <AccordionHeader>
          <AccordionTrigger>When to use it?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent padded>
          Ideal for React projects needing fast, consistent UI elements.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
