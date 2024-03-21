"use client";

import { useRef } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import { Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { getLocale } from "~/public/dictionaries";
import { throttle } from "~/utils/toolkit";
import Underline from "./components/underline";

export default function HomePage() {
  //  幻灯片ref
  const carouselRef: any = useRef(null);

  const CDN_PATH = process.env.NEXT_PUBLIC_CDN_DOMAIN + '/home'

  const router = useRouter();
  const locale = getLocale();

  const arrowStyle = {
    width: "35px",
    height: "35px",
    color: "#fff",
    marginLeft: "16px",
  };

  //  切换换灯片
  const handleCarousel = throttle((type: any) => {
    if (type === "next") {
      carouselRef.current.next();
    } else {
      carouselRef.current.prev();
    }
  }, 300);

  //  路由跳转
  const jumpPage = (path: string) => {
    if (!path) return;
    router.push(`/${locale + path}`);
  };

  //  国际化
  return (
    <div className={styles.main}>
      <div className={styles.CarouselWrap}>
        <div
          className={`${styles.arrow} ${styles.prev}`}
          onClick={(e) => {
            e.stopPropagation();
            handleCarousel("prev");
          }}
        >
          <LeftOutlined style={arrowStyle} />
        </div>
        <Carousel ref={carouselRef} autoplay fade>
          <div className={styles.imageWrap}>
            <img src={CDN_PATH + '/banner_1.jpg'} alt="" />
          </div>
          <div className={styles.imageWrap}>
            <img src={CDN_PATH + '/banner_2.jpeg'} alt="" />
          </div>
          <div className={styles.imageWrap}>
            <img src={CDN_PATH + '/banner_3.jpg'} alt="" />
          </div>
        </Carousel>
        <div
          className={`${styles.arrow} ${styles.next}`}
          onClick={(e) => {
            e.stopPropagation();
            handleCarousel("next");
          }}
        >
          <RightOutlined style={arrowStyle} />
        </div>
      </div>
      <div className={styles.Banner_1}>
        <span>JOIN THE FIGHT AGAINST </span>
        <span
          style={{
            color: "#f5aa00",
            position: "relative",
            display: "inline-block",
          }}
        >
          {" "}
          CHILD TRAFFICKING
          <div className={styles.svg1}>
            <Underline />
          </div>
        </span>
        <br />
        <span>IN YOUR COMMUNITY</span>
        <br />
        <br />
        <span
          style={{
            fontFamily: "oswald-extralight,oswald,sans-serif",
            fontSize: "22px",
            fontWeight: "300",
            width: "980px",
            display: "inline-block",
          }}
        >
          ZOE Japan works to end child trafficking. Our goal is to rescue
          children from human traffickers and provide them with opportunities
          and support for a new path and future. We won’t stop until every
          person is reached & rescued.
        </span>
      </div>
      <div className={styles.Banner_2}>
        <div className={styles.wrap}>
          <div className={styles.icon}>
            <div className={styles.imageWrap}>
              <img src={CDN_PATH + '/Banner_2_1.webp'} alt="" />
            </div>
            <div className={styles.content}>
              EXPLOITING A CHILD FOR PROSTITUTION
            </div>
          </div>
          <div className={styles.icon}>
            <div className={styles.imageWrap}>
              <img src={CDN_PATH + '/Banner_2_2.webp'} alt="" />
            </div>
            <div className={styles.content}>FORCED LABOR</div>
          </div>
          <div className={styles.icon}>
            <div className={styles.imageWrap}>
              <img src={CDN_PATH + '/Banner_2_3.webp'} alt="" />
            </div>
            <div className={styles.content}>COMPENSATED DATING</div>
          </div>
          <div className={styles.icon}>
            <div className={styles.imageWrap}>
              <img src={CDN_PATH + '/Banner_2_4.webp'} alt="" />
            </div>
            <div className={styles.content}>
              SEX IN EXCHANGE FOR SOMETHING OF VALUE
            </div>
          </div>
          <div className={styles.icon}>
            <div className={styles.imageWrap}>
              <img src={CDN_PATH + '/Banner_2_5.webp'} alt="" />
            </div>
            <div className={styles.content}>REVENGE PORN</div>
          </div>
          <div className={styles.icon}>
            <div className={styles.imageWrap}>
              <img src={CDN_PATH + '/Banner_2_6.webp'} alt="" />
            </div>
            <div className={styles.content}>CHILD SEXUAL ABUSE IMAGERY</div>
          </div>
        </div>
        <div className={styles.moreInfo}>
          <span>
            Child trafficking is the exploitation of children under 18 through
            sexual exploitation or labor by means of force, fraud, or coercion.
          </span>
          <p>It is modern day slavery.</p>
          <div className={styles.moreButton}>
            <Link href={`/${locale}/learn`}>MORE INFO</Link>
          </div>
        </div>
      </div>
      <div className={styles.Banner_3}>
        <div className={styles.title}>WHAT ZOE DOES</div>
        <div className={styles.contentWrap}>
          <div className={styles.content}>
            <img src={CDN_PATH + '/Banner_3_1.webp'} alt="" />
            <span>
              <div className={styles.contentTitle}>PREVENTION</div>
              <div className={styles.contentText}>
                We prevent trafficking through awareness campaigns, community
                education, street outreaches and social media engagement.
              </div>
            </span>
          </div>
          <div className={styles.content}>
            <img src={CDN_PATH + '/Banner_3_2.webp'} alt="" />
            <span>
              <div className={styles.contentTitle}>RESCUE</div>
              <div className={styles.contentText}>
                Through our consultation service and call center, we act as
                facilitators to connect survivors with Child Consultation
                Centers and legal advisors so that they can take the first step
                to being rescued.
              </div>
            </span>
          </div>
          <div className={styles.content}>
            <img src={CDN_PATH + '/Banner_3_3.webp'} alt="" />
            <span>
              <div className={styles.contentTitle}>RESTORATION</div>
              <div className={styles.contentText}>
                We help to restore children by connecting them with specialized
                services provided by NPOs and private shelters. We also provide
                hands-on support at a government approved children’s shelter to
                take care of children’s needs.{" "}
              </div>
            </span>
          </div>
        </div>
        <div className={styles.subTitle}>
          There are many ways to get involved and make a difference!
        </div>
        <div className={styles.button}>
          <Link href={`/${locale}/get-involved`} className={styles.maskLink}>
            GET INVOLVED
          </Link>
        </div>
      </div>
      <div className={styles.Banner_4}>
        <div className={styles.videoWrap}>
          <video
            playsInline
            preload="auto"
            muted
            loop
            autoPlay
            src={
              `${CDN_PATH}/home-bg.mp4`
            }
            style={{
              height: "100%",
              width: "100%",
              opacity: 1,
            }}
          />
        </div>
        <div className={styles.contentWrap}>
          <div className={styles.title}>BEING EDUCATED IS THE FIRST STEP!</div>
          <div className={styles.cardWrap}>
            <div className={`${styles.card} ${styles.card1}`}>
              <img src={CDN_PATH + '/Banner_4_1.png'} alt="" />
              <div className={styles.bg}></div>
              <Link href={`/${locale}/learn/resource`}>CONCERNED ADULT</Link>
            </div>
            <div className={`${styles.card} ${styles.card2}`}>
              <img src={CDN_PATH + 'Banner_4_2.jpg'} alt="" />
              <div className={styles.bg}></div>
              <Link href={`/${locale}/learn/teen`}>I AM UNDER 18</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Banner_5}>
        <div className={styles.title}>CONSULTATION</div>
        <div className={styles.subTitle}>
          Consultation for teenagers. Please call us for assistance if you are a
          survivor. Calls are anonymous and we always protect your identity.
        </div>
        <div className={styles.phone}>
          <Link href={"tel:1010101test"}>test-1010101</Link>
        </div>
        <div className={styles.Line}>
          <img
            className={styles.brand}
            src={`${CDN_PATH}/LINE_Brand_icon.png`}
          />
          <img
            className={styles.code}
            src={`${CDN_PATH}/antiChikan_code.png`}
          />
        </div>
        <div className={styles.tips}>
          If you see something, say something! Report a suspicious incident.
        </div>
        <div className={styles.buttonWrap}>
          <Link
            className={styles.btn1}
            href={`/${locale}/consultation/get-help`}
          >
            CONSULTATION
          </Link>
          <Link className={styles.btn2} href={`/${locale}/consultation/report`}>
            REPORT A CASE
          </Link>
        </div>
      </div>
      <div className={styles.Banner_6}>
        <div className={styles.titleGroup}>
          <div className={styles.title}>WATCH OUR MUSIC VIDEO!</div>
          <div className={styles.subTitle}>We produced our first music video in collaboration with a local artist.
            <br />
            Watch the video here, and remember to turn on the subtitles if you don't speak Japanese.</div>
        </div>
        <div className={styles.iframeVideo}>
          <iframe src="https://www.youtube.com/embed/rbj_iu_8Lso?autoplay=0&mute=0&controls=1&loop=0&playsinline=1&enablejsapi=1&widgetid=1"></iframe>
        </div>
      </div>
    </div>
  );
}
