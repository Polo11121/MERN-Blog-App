import { Footer as FlowbiteFooter } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
import { Logo } from ".";

export const Footer = () => (
  <FlowbiteFooter container className="border border-t-8 border-teal-500">
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid w-full justify-between sm:flex md:grid-cols-1">
        <div className="mt-5">
          <Logo className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white sm:block" />
        </div>
        <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <FlowbiteFooter.Title title="About" />
            <FlowbiteFooter.LinkGroup col>
              <FlowbiteFooter.Link
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                Interviews
              </FlowbiteFooter.Link>
              <FlowbiteFooter.Link
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                Michael's Blog
              </FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>
          <div>
            <FlowbiteFooter.Title title="Follow us" />
            <FlowbiteFooter.LinkGroup col>
              <FlowbiteFooter.Link
                href="https://www.github.com/Polo11121"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Discord</FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>
          <div>
            <FlowbiteFooter.Title title="Legal" />
            <FlowbiteFooter.LinkGroup col>
              <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">
                Terms &amp; Conditions
              </FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>
        </div>
      </div>
      <FlowbiteFooter.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <FlowbiteFooter.Copyright
          href="#"
          by="Sahand's blog"
          year={new Date().getFullYear()}
        />
        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
          <FlowbiteFooter.Icon href="#" icon={BsFacebook} />
          <FlowbiteFooter.Icon href="#" icon={BsInstagram} />
          <FlowbiteFooter.Icon href="#" icon={BsTwitter} />
          <FlowbiteFooter.Icon
            href="https://github.com/sahandghavidel"
            icon={BsGithub}
          />
          <FlowbiteFooter.Icon href="#" icon={BsDribbble} />
        </div>
      </div>
    </div>
  </FlowbiteFooter>
);
