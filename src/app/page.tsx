import { Container } from "@/components/global/container";
import { BrandLogo } from "@/components/svg-components/brand-logo";
import { AddressInfo } from "@/components/ui/address-info";
import { Certification } from "@/components/ui/certification";
import { CustomerInfo } from "@/components/ui/customer-info";
import { VerificationStatus } from "@/components/ui/verification-status";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <header className="bg-white flex gap-6 items-center rounded-lg py-4 px-8 mt-[17px]">
        <div className="bg-[#0F595C] py-[19px] px-[8px] rounded-full">
          <BrandLogo />
        </div>
        <h1 className="capitalize text-black text-[28px] leading-10">
          digital address verification report
        </h1>
      </header>
      <>
        <div className="flex items-start gap-4 mt-[17px]">
          <CustomerInfo />
          <VerificationStatus />
        </div>
        <div className="flex items-start gap-4 mt-[17px]">
          <AddressInfo />
          <aside className="flex items-end gap-[22px] pt-[22px] w-[647px]  pb-[24px] px-8 rounded-md bg-white">
            <div>
              <h1 className="pb-[19px] uppercase font-light text-xs leading-[16.8px]">
                Building image
              </h1>
              <div className="relative w-[280px] h-[251px]">
                <Image
                  className="rounded-[3.62px]"
                  fill
                  src={"/images/building1.png"}
                  alt="building image"
                />
              </div>
            </div>
            <div>
              <h1 className="pb-[9px] uppercase font-light text-xs leading-[16.8px]">
                Nearby landmark
              </h1>
              <div className="relative w-[280px] h-[251px]">
                <Image
                  className="rounded-[3.62px]"
                  fill
                  src={"/images/building2.png"}
                  alt="building image"
                />
              </div>
            </div>
          </aside>
        </div>
      </>
      <Certification />
    </Container>
  );
}
