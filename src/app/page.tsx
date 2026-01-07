import Image from "next/image";
import Link from "next/link";
import Parallax from "@/components/Parallax";
import AboutUsBlock from "@/components/AboutUsBlock";
import NumbersBlock from "@/components/NumbersBlock";
import TextBlock from "@/components/TextBlock";
import {Accordion, AccordionItem} from "@/components/Accordion";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faSliders, faBullseye } from "@fortawesome/free-solid-svg-icons";
import SliderBlock from "@/components/SliderBlock";
import SliderBlock2 from "@/components/SliderBlock2";
import { TeamBlock, Member } from "@/components/TeamBlock";
import {GalleryBlock, GalleryItem} from "@/components/GalleryBlock";
import BlogBlock from "@/components/BlogBlock";
import GoogleMap from "@/components/GoogleMap";


export default function HomePage() {
    /* Banners block */
    const banners: string[] = [
        '/images/banner_block_2_img_1.png',
        '/images/banner_block_2_img_2.png',
        '/images/banner_block_2_img_3.png',
        '/images/banner_block_2_img_4.png',
        '/images/banner_block_2_img_5.png',
        '/images/banner_block_2_img_6.png'
    ];

    /* Clients block */
    const clientsItem: string = "w-6/12 float-left px-[15px] pb-[54px] max-md:w-full max-md:float-none";
    const clientsImg: string = "inline-block float-left ml-10 mr-6 mt-0 mb-6 transition-transform duration-500 ease-[ease] hover:scale-95 max-xl:ml-0 max-xl:mr-6 max-xl:mt-0 max-xl:mb-6 max-md:mt-0 max-md:mb-3.5 max-md:mx-3.5";
    const clientsTextBox: string = "pl-[180px] pr-7 py-0 max-xl:pl-[140px] max-xl:pr-[9px] max-xl:py-0";
    const clientsTitle: string = "font-montserrat text-[#333] text-sm uppercase pl-0 pr-[18px] pt-0 pb-[18px] max-xl:pb-3.5";
    const clientsProf: string = "italic text-[#333] font-thin leading-[15px] relative inline-block pb-3.5 mb-[18px] after:content-[''] after:absolute after:w-[60px] after:border-b-[3px] after:border-b-[#f38181] after:border-[none] after:border-solid after:left-0 after:bottom-0 max-xl:text-sm max-lg:text-[13px]";
    const clientsDescription: string = "text-[15px] leading-[23px] max-xl:text-sm max-lg:text-[13px] max-lg:leading-[18px]";

  return (
      <>
          <Parallax/>
          <AboutUsBlock/>
          <NumbersBlock/>
          <div className="text-block-2 pt-28 pb-[72px] px-0 bg-white">
              <div className="w-[1200px] mx-auto my-0 p-0 text-center max-xl:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-xs:w-[275px]">
                  <h3 className="font-kaushanscript text-2xl leading-4 block font-medium text-[#333333] pt-0 pb-6 px-6">We work with</h3>
                  <h2 className="font-montserrat mb-[18px] text-3xl leading-6 text-[#333333] font-semibold inline-block uppercase relative pt-0 pb-8 px-[18px] after:content-[''] after:absolute after:w-[60px] after:ml-[-30px] after:border-b-[3px] after:border-b-[#f38181] after:border-[none] after:border-solid after:left-2/4 after:bottom-0 max-md:text-[28px] max-md:px-0">Amazing Services</h2>
                  <TextBlock/>
              </div>
          </div>
          <div className="banner-block relative mb-[88px] pt-28"
               style={{backgroundImage: "url(/images/banner_block_bg.jpg)"}}>
              <div className="w-[1200px] mx-auto my-0 p-0 text-center max-xl:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-xs:w-[275px]">
                  <h3 className="font-kaushanscript text-2xl leading-4 block font-medium text-[#333333] pt-0 pb-6 px-6">For all devices</h3>
                  <h2 className="font-montserrat mb-[42px] text-3xl leading-6 text-[#333333] font-semibold block uppercase relative pt-0 pb-8 px-[18px] after:content-[''] after:absolute after:w-[60px] after:ml-[-30px] after:border-b-[3px] after:border-b-[#f38181] after:border-[none] after:border-solid after:left-2/4 after:bottom-0 max-md:text-[28px] max-md:px-0">Unique design</h2>
                  <Image
                      src="/images/banner_block_img_1.png"
                      alt=""
                      width={477}
                      height={581}
                      className="ml-[-50px] inline-block relative z-[22] max-md:w-[227px] max-md:ml-[-38px]"
                  />
                  <Image
                      src="/images/banner_block_img_2.png"
                      alt=""
                      width={208}
                      height={480}
                      className="absolute z-[23] mb-[-92px] inline-block ml-[78px] left-2/4 bottom-0 max-md:ml-[-3px] max-md:mb-[-54px] max-md:w-[155px]"
                  />
              </div>
          </div>
          <div className="service-block pt-[22px] pb-[78px] px-0">
              <div className="w-[1200px] mx-auto my-0 p-0 text-center max-xl:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-xs:w-full max-xs:px-2.5">
                  <h3 className="font-kaushanscript text-2xl leading-4 block font-medium text-[#333333] pt-0 pb-6 px-6">Service</h3>
                  <h2 className="font-montserrat mb-9 text-3xl leading-6 text-[#333333] font-semibold inline-block uppercase relative pt-0 pb-8 px-[18px] after:content-[''] after:absolute after:w-[60px] after:ml-[-30px] after:border-b-[3px] after:border-b-[#f38181] after:border-[none] after:border-solid after:left-2/4 after:bottom-0 max-md:text-[28px] max-md:px-0">What we do</h2>
                  <p className="pb-[88px] px-[110px] py-0 text-[15px] leading-[23px] text-center max-xl:px-3 max-md:text-xs max-md:leading-[18px] max-md:pb-[50px] max-md:px-0">Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  <div className="w-full overflow-hidden">
                      <div className="w-6/12 float-left pb-11 px-[15px] max-md:w-full max-md:float-none max-md:px-0">
                          <Link href="#" className="pb-8 inline-block md:max-lg:overflow-hidden max-md:pb-0">
                              <Image
                                  src="/images/text_block_3_img_1.jpg"
                                  alt=""
                                  width={585}
                                  height={390}
                                  className="md:max-lg:ml-[60px] md:max-lg:mr-0 md:max-lg:mt-[81px] md:max-lg:mb-[100px] md:max-lg:scale-[1.73]"
                              />
                          </Link>
                      </div>
                      <div className="w-6/12 float-left pb-11 px-[15px] max-md:w-full max-md:float-none max-md:px-0">
                          <Accordion>
                              <AccordionItem title="Photography" icon={faImage}>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                      officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                  laborum.</p>
                              </AccordionItem>
                              <AccordionItem title="Creativity" icon={faSliders}>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                      officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                  laborum.</p>
                              </AccordionItem>
                              <AccordionItem title="Web design" icon={faBullseye}>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                      officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                  laborum.</p>
                              </AccordionItem>
                          </Accordion>
                      </div>
                  </div>
              </div>
          </div>
          <div className="slider-block [background:#f8f8f8] text-left px-0 py-[68px]">
              <div className="w-[1200px] mx-auto my-0 p-0 max-xl:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-md:text-center max-xs:w-full">
                  <SliderBlock/>
              </div>
          </div>
          <div className="team-block text-center pt-24 pb-[52px] px-0">
              <div className="w-[1200px] mx-auto my-0 p-0 max-xl:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-xs:w-[275px]">
                  <h3 className="font-kaushanscript text-2xl leading-4 font-medium text-[#333333] block pt-0 pb-6 px-6">Who we are</h3>
                  <h2 className="font-montserrat text-[#333333] font-semibold inline-block uppercase relative text-3xl leading-6 pt-0 pb-8 px-[18px] mb-[42px] after:content-[''] after:absolute after:w-[60px] after:ml-[-30px] after:border-b-[3px] after:border-b-[#f38181] after:border-[none] after:border-solid after:left-2/4 after:bottom-0 max-md:text-[28px] max-md:px-0">Meet our team</h2>
                  <p className="text-[15px] leading-[23px] px-[110px] py-0 mb-[100px]  max-xl:px-0 max-lg:text-[13px] max-lg:leading-[18px] max-lg:px-7 max-lg:mb-[50px] max-md:px-0">Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.</p>
                  <TeamBlock blockClasses="mr-[-15px] ml-[-15px]">
                      <Member
                          imgUrl="/images/team_block_img_1.jpg"
                          imgWidth={380}
                          imgHeight={469}
                          imgAlt="Graphic Design"
                          name="Matthew Dix"
                          prof="Graphic Design"
                          facebook="#"
                          twitter="#"
                          pinterest="#"
                          instagram="#"
                      />
                      <Member
                          imgUrl="/images/team_block_img_2.jpg"
                          imgWidth={380}
                          imgHeight={469}
                          imgAlt="UX design"
                          name="Christopher Campbell"
                          prof="Branding/UX design"
                          facebook="#"
                          twitter="#"
                          pinterest="#"
                          instagram="#"
                      />
                      <Member
                          imgUrl="/images/team_block_img_3.jpg"
                          imgWidth={380}
                          imgHeight={469}
                          imgAlt="Developer"
                          name="Michael Fertig"
                          prof="Developer"
                          facebook="#"
                          twitter="#"
                          pinterest="#"
                          instagram="#"
                      />
                  </TeamBlock>
              </div>
          </div>
          <div className="[background:#f8f8f8] px-0 py-[54px]">
              <div className="w-[1200px] mx-auto my-0 p-0 max-xl:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-xs:w-[275px]">
                  <ul className="mr-[-15px] ml-[-15px] after:content-[''] after:block after:clear-both max-md:mx-0">
                      {banners.map((item: string, index: number) => (
                          <li key={index}
                              className="inline-block list-none transition-opacity duration-500 ease-[ease] w-[16.6%] float-left max-md:w-6/12 max-md:text-center">
                              <Link href="#" className="inline-block">
                                  <Image
                                      src={item}
                                      alt=""
                                      width={147}
                                      height={141}
                                      className="inline-block transition-transform duration-500 ease-[ease] w-full cursor-pointer hover:scale-105"
                                  />
                              </Link>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
          <div className="gallery-block pt-[116px] w-[1200px] mx-auto my-0 p-0 text-center max-xl:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-xs:w-full max-xs:px-[15px]">
              <h3 className="font-kaushanscript text-2xl leading-4 block font-medium text-[#333333] pt-0 pb-6 px-6">What we do</h3>
              <h2 className="font-montserrat text-3xl leading-6 text-[#333333] font-semibold inline-block uppercase relative mb-9 pt-0 pb-8 px-[18px] after:content-[''] after:absolute after:w-[60px] after:ml-[-30px] after:border-b-[3px] after:border-b-[#f38181] after:border-[none] after:border-solid after:left-2/4 after:bottom-0 max-md:text-[28px] max-md:px-0">Some of our work</h2>
              <p className="text-[15px] leading-[23px] mb-[100px] px-[110px] py-0 max-xl:px-0 max-lg:text-[13px] max-lg:leading-[18px] max-lg:mb-[50px] max-lg:px-[28px] max-md:px-0">Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <GalleryBlock blockClasses="gallery after:content-[''] after:block after:clear-both">
                  <GalleryItem
                      imgUrl="/images/gallary_block_img_1.jpg"
                      imgWidth={399}
                      imgHeight={324}
                      imgAlt=""
                      fancyGroup="gallery"
                      title="Creatively designed"
                      text="Lorem ipsum dolor sit"
                  />
                  <GalleryItem
                      imgUrl="/images/gallary_block_img_2.jpg"
                      imgWidth={399}
                      imgHeight={324}
                      imgAlt=""
                      fancyGroup="gallery"
                      title="Creatively designed"
                      text="Lorem ipsum dolor sit"
                  />
                  <GalleryItem
                      imgUrl="/images/gallary_block_img_3.jpg"
                      imgWidth={399}
                      imgHeight={324}
                      imgAlt=""
                      fancyGroup="gallery"
                      title="Creatively designed"
                      text="Lorem ipsum dolor sit"
                  />
                  <GalleryItem
                      imgUrl="/images/gallary_block_img_4.jpg"
                      imgWidth={399}
                      imgHeight={324}
                      imgAlt=""
                      fancyGroup="gallery"
                      title="Creatively designed"
                      text="Lorem ipsum dolor sit"
                  />
                  <GalleryItem
                      imgUrl="/images/gallary_block_img_5.jpg"
                      imgWidth={399}
                      imgHeight={324}
                      imgAlt=""
                      fancyGroup="gallery"
                      title="Creatively designed"
                      text="Lorem ipsum dolor sit"
                  />
                  <GalleryItem
                      imgUrl="/images/gallary_block_img_6.jpg"
                      imgWidth={399}
                      imgHeight={324}
                      imgAlt=""
                      fancyGroup="gallery"
                      title="Creatively designed"
                      text="Lorem ipsum dolor sit"
                  />
              </GalleryBlock>
          </div>
          <div className="slider-block-2 text-left pt-[98px] pb-[124px] px-0">
              <div className="w-[1200px] mx-auto my-0 p-0 max-xl:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-md:text-center max-xs:w-full">
                  <SliderBlock2/>
              </div>
          </div>
          <div
              className="pt-[114px] pb-16 px-0"
              style={{
                  background: "url(/images/text_block_4_bg.jpg) no-repeat bottom center #f1f1f1"
              }}
          >
              <div className="w-[1200px] mx-auto my-0 p-0 text-center max-xl:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-xs:w-full">
                  <h3 className="font-kaushanscript text-2xl leading-4 block font-medium text-[#333333] pt-0 pb-6 px-6">Happy Clients</h3>
                  <h2 className="font-montserrat text-3xl leading-6 text-[#333333] font-semibold inline-block uppercase relative pt-0 pb-8 px-[18px] mb-[88px] after:content-[''] after:absolute after:w-[60px] after:ml-[-30px] after:border-b-[3px] after:border-b-[#f38181] after:border-[none] after:border-solid after:left-2/4 after:bottom-0 max-md:text-[28px]">What people say</h2>
                  <ul className="text-left mr-[-15px] ml-[-15px] after:content-[''] after:block after:clear-both [&>li:nth-of-type(2n+1)]:clear-both max-md:mx-0">
                      <li className={clientsItem}>
                          <Image
                              src="/images/text_block_4_img_1.png"
                              alt=""
                              width={113}
                              height={112}
                              className={clientsImg}
                          />
                          <div className={clientsTextBox}>
                              <h2 className={clientsTitle}>Matthew Dix</h2>
                              <p className={clientsProf}>Graphic Design</p>
                              <p className={clientsDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                          </div>
                      </li>
                      <li className={clientsItem}>
                          <Image
                              src="/images/text_block_4_img_2.png"
                              alt=""
                              width={113}
                              height={112}
                              className={clientsImg}
                          />
                          <div className={clientsTextBox}>
                              <h2 className={clientsTitle}>Nick Karvounis</h2>
                              <p className={clientsProf}>Graphic Design</p>
                              <p className={clientsDescription}>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                  dolore magna aliqua. Ut enim ad minim veniam</p>
                          </div>
                      </li>
                      <li className={clientsItem}>
                          <Image
                              src="/images/text_block_4_img_3.png"
                              alt=""
                              width={113}
                              height={112}
                              className={clientsImg}
                          />
                          <div className={clientsTextBox}>
                              <h2 className={clientsTitle}>Jaelynn Castillo</h2>
                              <p className={clientsProf}>Graphic Design</p>
                              <p className={clientsDescription}>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                  labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                          </div>
                      </li>
                      <li className={clientsItem}>
                          <Image
                              src="/images/text_block_4_img_4.png"
                              alt=""
                              width={113}
                              height={112}
                              className={clientsImg}
                          />
                          <div className={clientsTextBox}>
                              <h2 className={clientsTitle}>Mike Petrucci</h2>
                              <p className={clientsProf}>Graphic Design</p>
                              <p className={clientsDescription}>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                  et dolore magna aliqua. Ut enim ad minim.</p>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
          <BlogBlock />
          <GoogleMap />
      </>
  )
}