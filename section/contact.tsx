import { ContactCard } from "@/components/cards/Contact";
import { Heading } from "@/components/heading/heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SelectInput } from "@/components/ui/select-input";
import { TextArea } from "@/components/ui/textArea";
import emailjs from "@emailjs/browser";
import React, { FormEvent, useRef, useState } from "react";
import { FaPhoneVolume, FaProjectDiagram, FaUser } from "react-icons/fa";
import { MdEmail, MdSubject } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

export default function ContactSection() {
  const [services, setServices] = useState<string[] | []>([]);
  const [budgets, setBudget] = useState<string[] | []>([]);
  const formRef = useRef<HTMLFormElement>(null!);
  const btnRef = useRef<HTMLButtonElement>(null!);
  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    emailjs.sendForm(
      "service_39az6v4",
      "template_pqd46wr",
      formRef.current,
      "Cm6ZqM2M7VJJ1lGyg"
    );
  };
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="03" title_1="Contact" title_2="Me"></Heading>
      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col gap-8 ">
            <ContactCard
              title={"Call Us Directly at"}
              icon={
                <FaPhoneVolume className="fill-[#333] text-lg"></FaPhoneVolume>
              }
              text={"+49-152-151-09694"}
              btnText={"call us"}
            ></ContactCard>
            <ContactCard
              title={"Chat with Us"}
              icon={<MdEmail className="fill-[#333] text-lg"></MdEmail>}
              text={"samkazah444@gmail.com"}
              btnText={"Email us"}
            ></ContactCard>
          </div>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px] shadow-md"
          >
            <div className="flex flex-col lg:flex-row  items-center justify-between mb-4 gap-8">
              <Input
                name="name"
                type="text"
                placeholder="Full Name"
                icon={<FaUser></FaUser>}
              ></Input>
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                icon={<MdEmail></MdEmail>}
              ></Input>
            </div>
            <div className="flex flex-col lg:flex-row  items-center justify-between mb-4 gap-8">
              <Input
                type="text"
                placeholder="Subject"
                name="subject"
                icon={<MdSubject></MdSubject>}
              ></Input>
            </div>
            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">
                  What services are you in need for ?
                </h1>
                <div className="flex flex-wrap items-center  justify-between mb-4 gap-8">
                  {servicesOption.map((service) => {
                    return (
                      <SelectInput
                        key={service.id}
                        type={"checkbox"}
                        id={service.id}
                        text={service.text}
                        selectedOptions={services}
                        setSelectedOption={setServices}
                        allowMultiple
                      ></SelectInput>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">What is your budget ?</h1>
                <div className="flex flex-wrap items-center  justify-between mb-4 gap-8">
                  {BudgetOption.map((budget) => {
                    return (
                      <SelectInput
                        key={budget.id}
                        type={"radio"}
                        id={budget.id}
                        text={budget.text}
                        selectedOptions={budgets}
                        setSelectedOption={setBudget}
                      ></SelectInput>
                    );
                  })}
                </div>
              </div>
            </div>
            <TextArea
              placeholder="Tell us about your project"
              name="message"
              icon={<FaProjectDiagram></FaProjectDiagram>}
            ></TextArea>
            <div className="w-full flex justify-end">
              <Button onClick={()=>btnRef.current.click()} type="submit" className="!w-44 !py-3 !text-xl">
                Send<SiMinutemailer></SiMinutemailer>
              </Button>
            </div>
            <div className="hidden">
              <input  value={services.join(' ,')} name="services" hidden></input>
              <input value={budgets} name="budget" hidden></input>
            </div>
            <button type="submit" ref={btnRef} hidden >Send</button>
          </form>
        </div>
      </Card>
    </div>
  );
}

const servicesOption = [
  { text: "Front End", id: "1" },
  { text: "Back End", id: "2" },
  { text: "Full Stack", id: "3" },
];

const BudgetOption = [
  { text: "< 500", id: "less than 500$" },
  { text: "500 - 2000 ", id: "between 500$ and 2000$" },
  { text: " > 2000", id: "more than 2000$" },
];
