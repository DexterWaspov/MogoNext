'use client';

import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer  } from "react-scroll-parallax";

export default function Parallax() {
    const h3TitleClasses: string = "font-kaushanscript mb-16 text-7xl leading-[65px] font-thin text-white px-[18px] py-0 max-lg:text-[64px] max-lg:leading-[51px] max-md:text-[35px] max-md:leading-[30px] max-xs:px-0";
    const h2TitleClasses: string = "font-montserrat mb-[50px] text-[150px] leading-[142px] font-bold text-white uppercase relative pt-0 pb-16 px-[92px] after:content-[''] after:absolute after:w-[60px] after:ml-[-30px] after:border-b-[3px] after:border-b-white after:border-[none] after:border-solid after:left-2/4 after:bottom-0 max-[1200px]:text-[118px] max-[1200px]:leading-[128px] max-[1200px]:pt-0 max-[1200px]:pb-16 max-[1200px]:px-[54px] max-lg:text-[99px] max-lg:leading-[108px] max-lg:p-0 max-md:text-[49px] max-md:leading-[62px] max-md:pt-0 max-md:pb-16 max-md:px-0";

    return (
        <ParallaxProvider>
            <ParallaxBanner className="h-[1269px] max-lg:h-[1050px] max-md:h-[920px]">
                <ParallaxBannerLayer
                    image="/images/parallax_block_bg_1.jpg"
                    speed={-50}
                    expanded={false}
                    style={{
                        backgroundSize: 'auto',
                        backgroundPositionY: '0'
                    }}
                />
                <ParallaxBannerLayer>
                    <div className="w-[1200px] mx-auto my-0 pt-[336px] pb-[364px] px-0 text-center max-[1200px]:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-xs:w-[275px]">
                        <h3 className={h3TitleClasses}>Creative Template</h3>
                        <h2 className={h2TitleClasses}>Welcome to MoGo</h2>
                        <button type="button" className="[background:transparent] [transition:border-color_500ms_ease,background_500ms_ease] border-[3px] border-solid border-white hover:[background:#95e1d3] hover:border-[#95e1d3]">
                            <span className="font-montserrat uppercase block cursor-pointer leading-3 text-sm font-semibold text-white px-7 py-3">Learn more</span>
                        </button>
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>
            <ParallaxBanner className="h-[1089px] max-lg:h-[920px] max-md:h-[800px]">
                <ParallaxBannerLayer
                    image="/images/parallax_block_bg_2.jpg"
                    speed={-50}
                    expanded={false}
                    style={{
                        backgroundSize: 'auto',
                        backgroundPositionY: '0'
                    }}
                />
                <ParallaxBannerLayer>
                    <div className="w-[1200px] mx-auto my-0 pt-[235px] pb-[364px] px-0 text-center max-[1200px]:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-xs:w-[275px]">
                        <h3 className={h3TitleClasses}>Who we are</h3>
                        <h2 className={h2TitleClasses}>Meet our team</h2>
                        <button type="button" className="[background:transparent] [transition:border-color_500ms_ease,background_500ms_ease] border-[3px] border-solid border-white hover:[background:#95e1d3] hover:border-[#95e1d3]">
                            <span className="font-montserrat uppercase block cursor-pointer leading-3 text-sm font-semibold text-white px-7 py-3">Read more</span>
                        </button>
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>
            <ParallaxBanner className="h-[1075px] max-lg:h-[920px] max-md:h-[790px]">
                <ParallaxBannerLayer
                    image="/images/parallax_block_bg_3.jpg"
                    speed={-50}
                    expanded={false}
                    style={{
                        backgroundSize: 'auto',
                        backgroundPositionY: '0'
                    }}
                />
                <ParallaxBannerLayer>
                    <div className="w-[1200px] mx-auto my-0 pt-[235px] pb-[364px] px-0 text-center max-[1200px]:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-xs:w-[275px]">
                        <h3 className={h3TitleClasses}>For all devices</h3>
                        <h2 className={h2TitleClasses}>Unique design</h2>
                        <button type="button" className="[background:transparent] [transition:border-color_500ms_ease,background_500ms_ease] border-[3px] border-solid border-white hover:[background:#e98282] hover:border-[#e98282]">
                            <span className="font-montserrat uppercase block cursor-pointer leading-3 text-sm font-semibold text-white px-7 py-3">View more</span>
                        </button>
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        </ParallaxProvider>
    );
}