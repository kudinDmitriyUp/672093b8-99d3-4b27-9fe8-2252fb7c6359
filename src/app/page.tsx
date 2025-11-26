"use client"

import { Coffee, Flame, Mail, UtensilsCrossed, Star, Instagram, Facebook, MapPin } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="small"
      background="fluid"
      cardStyle="solid-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Кава Дім"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139887791-5fjkqu9m.jpg"
          logoAlt="Kava Dim Coffee Shop Logo"
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "products" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Visit Us", href: "contact" }}
          buttonClassName="px-4 py-2"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Справжня українська кава"
          description="Відкрийте для себе автентичний смак України в кожній чашці. Традиційні рецепти, сучасні техніки, незабутній досвід."
          tag="Кава Дім"
          tagIcon={Coffee}
          buttons={[
            { text: "Переглянути меню", href: "products" },
            { text: "Забронювати столик", href: "contact" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139888520-nx17z6ga.jpg",
              imageAlt: "Свіжезварена еспресо"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139889466-aonfchbw.jpg",
              imageAlt: "Латте з розписом"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139890507-40n5guv7.jpg",
              imageAlt: "Зерна кави"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139891438-uvach7bp.jpg",
              imageAlt: "Українська кав'ярня"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139892092-qmebbn2o.jpg",
              imageAlt: "Сучасний інтер'єр"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139892821-4fqhvlnc.jpg",
              imageAlt: "Капучіно з мистецтвом"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Ми вірим, що кожна чашка кави розповідає історію України. Від гірських регіонів до багатовікових традицій, ми приносимо вам справжню смакову подорож."
          buttons={[
            { text: "Дізнатись більше", href: "#" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight
          title="Наш процес"
          description="Від відбору зерна до чашки кави - кожен крок олицетворює нашу пристрасть до якості"
          tag="Мастерство"
          tagIcon={Flame}
          textboxLayout="split"
          features={[
            {
              id: 1,
              title: "Відбір зерна",
              description: "Ми вибираємо найкращі кавові зерна з екологічних ферм України та світу",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139893465-tu4dh45d.jpg"
            },
            {
              id: 2,
              title: "Обсмажування",
              description: "Традиційні методи обсмажування розкривають унікальні смакові профілі кожного сорту",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139893972-oztiag89.jpg"
            },
            {
              id: 3,
              title: "Приготування",
              description: "Наші баристи з великим досвідом готують кожну чашку з любов'ю та точністю",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139894665-2qc1oy3n.jpg"
            },
            {
              id: 4,
              title: "Дегустація",
              description: "Почніть свою кавову подорож з досвідченим рекомендуванням та невичерпною пристрастю",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139895912-r5ntffkr.jpg"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Наші фірмові напитки"
          description="Вибір класичних кавових напитків, приготованих на основі справжніх рецептів"
          tag="Меню"
          tagIcon={UtensilsCrossed}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Еспресо",
              price: "35 грн",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139896657-ntvrh21p.jpg",
              imageAlt: "Чорна еспресо"
            },
            {
              id: "2",
              name: "Латте",
              price: "55 грн",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139897309-tayo9rui.jpg",
              imageAlt: "Крем'яне латте"
            },
            {
              id: "3",
              name: "Капучіно",
              price: "60 грн",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139897957-85hninbk.jpg",
              imageAlt: "Класичний капучіно"
            },
            {
              id: "4",
              name: "Американо",
              price: "40 грн",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139898578-kzfyaz29.jpg",
              imageAlt: "Американо чорна"
            },
            {
              id: "5",
              name: "Макіато",
              price: "50 грн",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139899292-6gvin81z.jpg",
              imageAlt: "Макіато вишукана"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Що про нас кажуть"
          description="Відгуки наших вдячних клієнтів з усього України"
          tag="Рецензії"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Марія",
              handle: "@mariia_kyiv",
              testimonial: "Найкращий есплесо в місті! Закохалась в неповторну атмосферу кав'ярні.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139900162-fdp59e6m.jpg",
              imageAlt: "Марія портрет"
            },
            {
              id: "2",
              name: "Іван",
              handle: "@ivan_coffee_lover",
              testimonial: "Справжня українська гостинність у кожній чашці. Рекомендую!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139901000-b2xeirj6.jpg",
              imageAlt: "Іван портрет"
            },
            {
              id: "3",
              name: "Олена",
              handle: "@olena_coffee",
              testimonial: "Неймовірно смачна кава і супер люди. Це мій нове улюблене місце!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139901743-4cdpc5um.jpg",
              imageAlt: "Олена портрет"
            },
            {
              id: "4",
              name: "Петро",
              handle: "@petro_morning",
              testimonial: "Кав'ярня з душею. Кожен раз чую тепло гостинності.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139902723-4umxipeo.jpg",
              imageAlt: "Петро портрет"
            },
            {
              id: "5",
              name: "Софія",
              handle: "@sofia_taste",
              testimonial: "Латте тут - це як мистецтво. Милуюсь і п'ю з задоволенням!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139903364-2w49wh35.jpg",
              imageAlt: "Софія портрет"
            },
            {
              id: "6",
              name: "Максим",
              handle: "@max_coffee",
              testimonial: "Відмінна якість, автентичність та професіоналізм. Повертаюсь сюди щодня!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764139903953-66yhapq6.jpg",
              imageAlt: "Максим портрет"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Підпишись"
          title="Будьте першими, хто дізнається про наші новинки"
          description="Отримуйте спеціальні пропозиції, рецепти та новини про нові сорти кави прямо на вашу пошту"
          tagIcon={Mail}
          inputPlaceholder="Ваш електронний лист"
          buttonText="Підписатись"
          termsText="Ми поважаємо вашу приватність. Ви можете відписатись будь-коли."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Кава Дім"
          copyrightText="© 2025 Кава Дім. Усі права захищені. Київ, Україна"
          columns={[
            {
              title: "Компанія",
              items: [
                { label: "Про нас", href: "about" },
                { label: "Наша місія", href: "#" },
                { label: "Контакти", href: "contact" }
              ]
            },
            {
              title: "Меню",
              items: [
                { label: "Напитки", href: "products" },
                { label: "Спеціальні пропозиції", href: "#" },
                { label: "Сезонні сорти", href: "#" }
              ]
            },
            {
              title: "Інформація",
              items: [
                { label: "Умови користування", href: "#" },
                { label: "Політика приватності", href: "#" },
                { label: "Доставка", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: MapPin, href: "#", ariaLabel: "Адреса" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}