/**
 * Articles migrated verbatim from the live drnasimgholami.com blog.
 * Titles, dates, excerpts and body HTML are the original Persian content;
 * images live in public/images/blog/<slug>/. Internal links inside `html`
 * start with %LOCALE% and are resolved per locale at render time.
 */

export type Article = {
  slug: string;
  title: string;
  /** ISO date (YYYY-MM-DD) as published on the live site. */
  date: string;
  excerpt: string;
  featured: string;
  html: string;
};

import { articleHtml as hifu_hands } from "./posts/hifu-hands";
import { articleHtml as cynosure_laser } from "./posts/cynosure-laser";
import { articleHtml as microdermabrasion } from "./posts/microdermabrasion";
import { articleHtml as prp_under_eye_treatment } from "./posts/prp-under-eye-treatment";
import { articleHtml as facial_prp } from "./posts/facial-prp";
import { articleHtml as zhoabex } from "./posts/zhoabex";
import { articleHtml as nose_filler } from "./posts/nose-filler";
import { articleHtml as filler_smile_lines } from "./posts/filler-smile-lines";
import { articleHtml as does_hifu_slim_face } from "./posts/does-hifu-slim-face";
import { articleHtml as botox_for_frown_lines } from "./posts/botox-for-frown-lines";
import { articleHtml as hair_prp } from "./posts/hair-prp";
import { articleHtml as foreign_botox } from "./posts/foreign-botox";
import { articleHtml as double_chin_hifu } from "./posts/double-chin-hifu";
import { articleHtml as eyebrow_mesotherapy } from "./posts/eyebrow-mesotherapy";
import { articleHtml as hifu_vs_fillers } from "./posts/hifu-vs-fillers";
import { articleHtml as subcision } from "./posts/subcision";
import { articleHtml as luxiva } from "./posts/luxiva";
import { articleHtml as burn_scar_treatment } from "./posts/burn-scar-treatment";
import { articleHtml as perleux } from "./posts/perleux";
import { articleHtml as doll_lip_gel_injection } from "./posts/doll-lip-gel-injection";
import { articleHtml as demodex_test } from "./posts/demodex-test";
import { articleHtml as open_skin_pores } from "./posts/open-skin-pores";
import { articleHtml as hifu_vs_mesotherapy } from "./posts/hifu-vs-mesotherapy";
import { articleHtml as jalubotox } from "./posts/jalubotox";
import { articleHtml as jawline_contouring } from "./posts/jawline-contouring";
import { articleHtml as facial_rejuvenation } from "./posts/facial-rejuvenation";
import { articleHtml as slimming_mesotherapy } from "./posts/slimming-mesotherapy";
import { articleHtml as hand_rejuvenation } from "./posts/hand-rejuvenation";
import { articleHtml as mesotherapy_treatment_for_facial_blemishes } from "./posts/mesotherapy-treatment-for-facial-blemishes";
import { articleHtml as neauvia } from "./posts/neauvia";
import { articleHtml as revitacare } from "./posts/revitacare";
import { articleHtml as best_lip_filler_brands } from "./posts/best-lip-filler-brands";
import { articleHtml as cheek_filler } from "./posts/cheek-filler";
import { articleHtml as revofil } from "./posts/revofil";
import { articleHtml as teosyal } from "./posts/teosyal";
import { articleHtml as stylage } from "./posts/stylage";
import { articleHtml as belotero } from "./posts/belotero";
import { articleHtml as juvederm } from "./posts/juvederm";
import { articleHtml as dysport } from "./posts/dysport";
import { articleHtml as hifu } from "./posts/hifu";
import { articleHtml as restylane } from "./posts/restylane";
import { articleHtml as perfectha } from "./posts/perfectha";
import { articleHtml as dermalstyle } from "./posts/dermalstyle";
import { articleHtml as revanesse_filler } from "./posts/revanesse-filler";
import { articleHtml as aliaxin_filler } from "./posts/aliaxin-filler";
import { articleHtml as neurafill_filler } from "./posts/neurafill-filler";
import { articleHtml as botox_injection } from "./posts/botox-injection";
import { articleHtml as facial_blemishes_laser_treatment } from "./posts/facial-blemishes-laser-treatment";
import { articleHtml as feet_botox } from "./posts/feet-botox";
import { articleHtml as laser_hair_removal } from "./posts/laser-hair-removal";
import { articleHtml as deka_laser } from "./posts/deka-laser";
import { articleHtml as xeomin_botox } from "./posts/xeomin-botox";
import { articleHtml as lip_gel_injection } from "./posts/lip-gel-injection";
import { articleHtml as ellanse_filler } from "./posts/ellanse-filler";
import { articleHtml as facial_mesotherapy } from "./posts/facial-mesotherapy";
import { articleHtml as underarm_botox } from "./posts/underarm-botox";
import { articleHtml as mesoneedling } from "./posts/mesoneedling";
import { articleHtml as masport_botox } from "./posts/masport-botox";
import { articleHtml as neuronox_botox } from "./posts/neuronox-botox";
import { articleHtml as palm_botox } from "./posts/palm-botox";
import { articleHtml as hair_mesotherapy } from "./posts/hair-mesotherapy";
import { articleHtml as the_best_mesogel_injection_doctor_in_tehran } from "./posts/the-best-mesogel-injection-doctor-in-tehran";
import { articleHtml as jalupro } from "./posts/jalupro";
import { articleHtml as dyston_botox } from "./posts/dyston-botox";
import { articleHtml as facial } from "./posts/facial";
import { articleHtml as under_eye_mesotherapy } from "./posts/under-eye-mesotherapy";
import { articleHtml as the_best_doctor_for_botox_injection_in_tehran } from "./posts/the-best-doctor-for-botox-injection-in-tehran";
import { articleHtml as profhilo } from "./posts/profhilo";
import { articleHtml as sunekos } from "./posts/sunekos";
import { articleHtml as thermage } from "./posts/thermage";
import { articleHtml as fraxel_laser } from "./posts/fraxel-laser";
import { articleHtml as microneedling } from "./posts/microneedling";

export const articles: Article[] = [
  {
    slug: "hifu-hands",
    title: "هایفوتراپی دست چیست؟ مزایا، عوارض و هزینه هایفو دست",
    date: "2026-09-09",
    excerpt: "هایفوتراپی دست چیست و چه کاربردی دارد؟ با مزایا، عوارض، تعداد جلسات، ماندگاری، قیمت و مراقبت های قبل و بعد از هایفو دست آشنا شوید.",
    featured: "/images/blog/hifu-hands/how-hand-hifu-work.webp",
    html: hifu_hands
  },
  {
    slug: "cynosure-laser",
    title: "همه چیز در مورد دستگاه لیزر سایناشور و مقایسه آن با کندلا",
    date: "2025-12-31",
    excerpt: "لیزر سایناشور چیست؟ بررسی مزایا، عوارض، تعداد جلسات و میزان درد، به همراه مقایسه با کندلا و دکا و لیست قیمت 1405.",
    featured: "/images/blog/cynosure-laser/benefits-cynodure.webp",
    html: cynosure_laser
  },
  {
    slug: "microdermabrasion",
    title: "میکرودرم ابریژن چیست و چه فرقی با فیشال دارد؟ مزایا، عوارض و هزینه",
    date: "2025-12-04",
    excerpt: "میکرودرم ابریژن یک روش پاکسازی پوست است که در آن لایه مرده روی پوست صورت یا بدن با دستگاه مخصوص تراشیده و برداشته می شود.+مقایسه با فیشال و هیدروفیشال",
    featured: "/images/blog/microdermabrasion/benefits-of-microdermabrasion-1024x1012.webp",
    html: microdermabrasion
  },
  {
    slug: "prp-under-eye-treatment",
    title: "همه چیز در مورد پی آر پی زیر چشم+ مقایسه با فیلر و مزو",
    date: "2025-12-01",
    excerpt: "پی آر پی زیر چشم چیست و چطور به رفع تیرگی و پف کمک می کند؟ پاسخ کامل به مزایا، عوارض، نتایج، ماندگاری، تعداد جلسات و هزینه هر جلسه را اینجا بخوانید.",
    featured: "/images/blog/prp-under-eye-treatment/under-eyes-prp-advantages.webp",
    html: prp_under_eye_treatment
  },
  {
    slug: "facial-prp",
    title: "پی آر پی صورت چیست؟ مزایا، مراحل و نتایج واقعی PRP صورت",
    date: "2025-11-23",
    excerpt: "پی آر پی صورت روشی طبیعی برای جوانسازی است. در این مطلب مزایا، کاربردها، مراقبت های بعد از PRP صورت و مقایسه آن با روش‌های دیگر را کامل توضیح داده‌ایم.",
    featured: "/images/blog/facial-prp/what-is-face-prp.webp",
    html: facial_prp
  },
  {
    slug: "zhoabex",
    title: "بررسی کامل فیلر ژوابکس: مقایسه با سایر برندها + هزینه تزریق",
    date: "2025-11-12",
    excerpt: "در این مطلب همه چیز درباره فیلر ژوابکس را بخوانید؛ از ترکیبات و کاربردهای زیبایی تا ماندگاری، مزایا، عوارض احتمالی و تفاوت آن با فیلرهای دیگر.",
    featured: "/images/blog/zhoabex/type-of-zhoabexfiller.webp",
    html: zhoabex
  },
  {
    slug: "nose-filler",
    title: "تزریق فیلر بینی؛ راهکاری غیرجراحی برای زیبایی و اصلاح فرم بینی",
    date: "2025-10-13",
    excerpt: "فیلر بینی، روشی غیرتهاجمی برای اصلاح فرم بینی است. با تزریق ژل های مخصوص، قوز و نواقص بینی را برطرف کرده و ظاهری طبیعی و زیبا داشته باشید.(0 تا 100 این عمل)",
    featured: "/images/blog/nose-filler/nose-filler-injection.webp",
    html: nose_filler
  },
  {
    slug: "filler-smile-lines",
    title: "راهنمای کامل تزریق ژل خط خنده+هزینه و ماندگاری",
    date: "2025-09-17",
    excerpt: "با تزریق ژل خط خنده می توان خطوط اطراف دهان را بهبود داد. در این مطلب، هزینه، ماندگاری، برندهای معتبر و مراقبتهای لازم را بررسی کرده ایم",
    featured: "/images/blog/filler-smile-lines/after-care-smile-line-filler-injection-3-1024x739.webp",
    html: filler_smile_lines
  },
  {
    slug: "does-hifu-slim-face",
    title: "آیا هایفو صورت را لاغر میکند؟",
    date: "2025-09-10",
    excerpt: "هایفو صورت چگونه باعث لاغری می شود؟ بررسی علمی مکانیسم هایفو در کاهش چربی، نکات کلیدی برای نتایج بهتر و روشهای اصلاح حجم از دست رفته.",
    featured: "/images/blog/does-hifu-slim-face/hifu-face.webp",
    html: does_hifu_slim_face
  },
  {
    slug: "botox-for-frown-lines",
    title: "بوتاکس خط اخم(5 نکته مهم که قبل از تزریق باید بدانید)",
    date: "2025-08-28",
    excerpt: "راهنمای کامل تزریق بوتاکس خط اخم؛ از هزینه، مراقبت های لازم بعد از تزریق و ماندگاری تا عوارض احتمالی. تصمیم آگاهانه برای داشتن پوستی صاف در ناحیه بین دو ابرو",
    featured: "/images/blog/botox-for-frown-lines/after-before-frowmlines-botox3.webp",
    html: botox_for_frown_lines
  },
  {
    slug: "hair-prp",
    title: "پی آر پی مو چیست؛ 5 نکته ای که قبل از تزریق حتما باید بدانید!",
    date: "2025-08-17",
    excerpt: "رشد طبیعی موها و افزایش تراکم با پی آر پی مو(هزینه، کاربردها، مراقبت های بعد از prp، مزایا و عوارض)+ مشاوره رایگان و تخفیف ویژه برای مراجعین جدید.",
    featured: "/images/blog/hair-prp/usages-of-hair-prp.webp",
    html: hair_prp
  },
  {
    slug: "foreign-botox",
    title: "آشنایی با 10 تا از بهترین برندهای بوتاکس خارجی در ایران",
    date: "2025-08-06",
    excerpt: "بوتاکس خارجی: راهنمایی کامل برای انتخاب برند، مقایسه کیفیت، قیمت، مزایا، معایب و ماندگاری همه مارک های معروف خارجی",
    featured: "/images/blog/foreign-botox/9-best-botox.webp",
    html: foreign_botox
  },
  {
    slug: "double-chin-hifu",
    title: "آیا رفع غبغب با هایفو ممکن است؟ 5 مزیت هایفو غبغب",
    date: "2025-07-28",
    excerpt: "هایفو غبغب: راه‌حل غیرجراحی برای کاهش غبغب و سفت‌سازی پوست چانه و گردن؛ نتایج طبیعی با مشاوره رایگان تحت نظر پزشک",
    featured: "/images/blog/double-chin-hifu/hifu-double-chin.webp",
    html: double_chin_hifu
  },
  {
    slug: "eyebrow-mesotherapy",
    title: "مزوتراپی ابرو چیست؟ فواید، تعداد جلسات، هزینه و مقایسه با کاشت",
    date: "2025-07-27",
    excerpt: "مزوتراپی ابرو راهی غیرتهاجمی و بدون درد برای تقویت و پرپشت شدن ابرو است. در این مقاله با مزایای آن، تعداد جلسات، مراقبت‌ها و تفاوت با کاشت ابرو آشنا شوید.",
    featured: "/images/blog/eyebrow-mesotherapy/eyebrow-mesotherapy.webp",
    html: eyebrow_mesotherapy
  },
  {
    slug: "hifu-vs-fillers",
    title: "هایفو بهتر است یا فیلر؟ (3 نکته مهم که حتما باید بدانید)",
    date: "2025-07-12",
    excerpt: "فیلر بهتر است یا هایفو؟ فیلر برای چین و چروک و حجم فوری عالیست و هایفو برای لیفت بدون تزریق و ماندگار به‌کار می‌رود، کدام نیاز شماست؟",
    featured: "/images/blog/hifu-vs-fillers/filler-or-hifu.webp",
    html: hifu_vs_fillers
  },
  {
    slug: "subcision",
    title: "سابسیژن چیست؟(عوارض، کاربردها، هزینه در سال 1405)",
    date: "2025-07-03",
    excerpt: "سابسیژن یکی از مؤثرترین روش‌های درمان جای جوش و اسکارهای فرورفته است. با نحوه انجام، مزایا، عوارض و تفاوت آن با میکرونیدلینگ آشنا شوید.",
    featured: "/images/blog/subcision/benefits-of-subcision.webp",
    html: subcision
  },
  {
    slug: "luxiva",
    title: "بررسی کامل مزوژل جوانساز ایرانی لوکسیوا",
    date: "2025-06-30",
    excerpt: "لوکسیوا چیست و چه مزایایی برای پوست دارد؟ معرفی کامل مزوژل ایرانی + جدول مقایسه با پروفایلو و پرلوکس، قیمت و نحوه تزریق تخصصی.",
    featured: "/images/blog/luxiva/usages-of-luxiva-1024x759.webp",
    html: luxiva
  },
  {
    slug: "burn-scar-treatment",
    title: "راهنمای جامع و کاربردی درمان جای سوختگی؛ 9 روش موثر برای رفع اسکار سوختگی",
    date: "2025-06-07",
    excerpt: "لیزر، کرم یا درمان خانگی؟ این مقاله بهترین روش های درمان جای سوختگی و رفع اسکار سوختگی را با جزئیات بررسی کرده است.",
    featured: "/images/blog/burn-scar-treatment/treatment-of-burn-scars-1024x779.webp",
    html: burn_scar_treatment
  },
  {
    slug: "perleux",
    title: "راهنمای کامل مزوژل پرلوکس(هزینه تزریق+مقایسه با سایر برندها)",
    date: "2025-06-01",
    excerpt: "مزوژل پرلوکس ساخت ایران با ترکیب هیالورونیک اسید و ویتامین ها، راهکاری نوین برای جوانسازی و آبرسانی عمیق پوست.",
    featured: "/images/blog/perleux/what-is-prelux-1024x798.webp",
    html: perleux
  },
  {
    slug: "doll-lip-gel-injection",
    title: "برای ژل لب عروسکی چند سی سی لازم است+نمونه کار",
    date: "2025-05-29",
    excerpt: "نیم سی سی یا یک سی سی؟ راهنمای کامل تزریق ژل لب عروسکی شامل هزینه به تومان، مقایسه برندهای معتبر و نمونه کار واقعی از تزریق های انجام شده.",
    featured: "/images/blog/doll-lip-gel-injection/doll-lip-gel.webp",
    html: doll_lip_gel_injection
  },
  {
    slug: "demodex-test",
    title: "تست دمودکس چیست؟ راه تشخیص، درمان+هزینه تست",
    date: "2025-05-23",
    excerpt: "تست دمودکس راهی سریع برای تشخیص انگل دمودکس و جلوگیری از عوارض پوستی مانند خارش و ریزش مو است. همین حالا بررسی کنید.",
    featured: "/images/blog/demodex-test/how-to-do-a-demodex-test.webp",
    html: demodex_test
  },
  {
    slug: "open-skin-pores",
    title: "منافذ باز پوست؛ علت ایجاد، پیشگیری و درمان",
    date: "2025-05-17",
    excerpt: "درمان منافذ باز پوست به صورت قطعی؛ از ماسک های خانگی تا جدیدترین روشهای لیزر، مقایسه انواع درمان های خانگی و کلینیکی و میزان تاثیر و ماندگاری هر کدام",
    featured: "/images/blog/open-skin-pores/treatment-of-skin-pores.webp",
    html: open_skin_pores
  },
  {
    slug: "hifu-vs-mesotherapy",
    title: "مزوتراپی بهتر است یا هایفوتراپی؟ بررسی تفاوت های کلیدی",
    date: "2025-05-07",
    excerpt: "مقایسه مزوتراپی و هایفوتراپی از هر لحاظ(کاربردها، ماندگاری، تعداد جلسات لازم، هزینه) و اینکه کدام یکی از این عمل ها برای شما مناسب تر است و عوارض کمتری دارد",
    featured: "/images/blog/hifu-vs-mesotherapy/comparison-of-mesotherapy-and-hyfotherapy-2.webp",
    html: hifu_vs_mesotherapy
  },
  {
    slug: "jalubotox",
    title: "جالوبوتاکس چیست و چه فرقی با بوتاکس دارد؟",
    date: "2025-05-04",
    excerpt: "جالو بوتاکس در واقع تلفیقی از بوتاکس و مزو ژل جالپرو است و از ترکیب اسید هیالورونیک و سم بوتولیسم به دست می آید.",
    featured: "/images/blog/jalubotox/what-is-jalu-botox.webp",
    html: jalubotox
  },
  {
    slug: "jawline-contouring",
    title: "بهترین روش زاویه سازی فک کدام است+مقایسه و نمونه کار",
    date: "2025-04-30",
    excerpt: "معرفی همه روشهای زاویه سازی فک و نمونه کارهای واقعی از میزان تغییر به همراه هزینه کانتورینگ فک و چانه(از تزریق فیلر تا ورزش های مخصوص برای زاویه دار کردن فک)",
    featured: "/images/blog/jawline-contouring/jaw-angulation-with-filler-injection.webp",
    html: jawline_contouring
  },
  {
    slug: "facial-rejuvenation",
    title: "15 راه جوانسازی صورت به همراه مزایا و معایب(خانگی و کلینیکی)",
    date: "2025-04-27",
    excerpt: "در این مقاله 14 روش جوانسازی پوست صورت در مطب، راههای جوان سازی صورت در منزل، بهترین کرم ها و ماسک های ضد پیری را معرفی و با هم مقایسه کردیم",
    featured: "/images/blog/facial-rejuvenation/clinical-ways-for-skin.webp",
    html: facial_rejuvenation
  },
  {
    slug: "slimming-mesotherapy",
    title: "مزوتراپی لاغری چیست(میزان تاثیر، عوارض و تعداد جلسات)",
    date: "2025-04-19",
    excerpt: "مزوتراپی لاغری یا مزو چربی سوز یک روش غیرجراحی و پرطرفدار برای کاهش چربی‌های موضعی در نواحی مختلف بدن مانند غبغب، شکم، بازوها، ران‌ها و پهلوها است.",
    featured: "/images/blog/slimming-mesotherapy/what-is-weight-loss-mesotherapy.webp",
    html: slimming_mesotherapy
  },
  {
    slug: "hand-rejuvenation",
    title: "معرفی 8 روش موثر برای جوانسازی دست",
    date: "2025-04-14",
    excerpt: "جوانسازی دست در خانه و کلینیک؛ ترکیبی از ساده ترین روشها با بیشترین تأثیر برای دستانی زیبا و جوان.(از ماسک تا لیزر و فیلر)",
    featured: "/images/blog/hand-rejuvenation/clinical-methods-of-hand-enhane.webp",
    html: hand_rejuvenation
  },
  {
    slug: "mesotherapy-treatment-for-facial-blemishes",
    title: "مزوتراپی لک صورت(هزینه+ماندگاری و میزان تاثیر)",
    date: "2025-04-12",
    excerpt: "مزوتراپی یا لیزر؟ کدوم برای لک صورت شما بهتره؟ مقایسه کامل، بهترین برندهای کوکتل ضد لک و مشاوره رایگان با دکتر نسیم غلامی+نمونه کار واقعی",
    featured: "/images/blog/mesotherapy-treatment-for-facial-blemishes/advantages-of-face-mezo-1024x714.webp",
    html: mesotherapy_treatment_for_facial_blemishes
  },
  {
    slug: "neauvia",
    title: "راهنمای جامع فیلر نیوویا: مزایا، کاربردها و هر آنچه باید بدانید",
    date: "2025-04-07",
    excerpt: "نیوویا مجموعه‌ای از فیلرهای پوستی و محصولات مراقبت از پوست است که با بهره‌گیری از فناوری‌های نوین، از جمله استفاده از PEGDE کراسلینک شده، نتایجی طبیعی و",
    featured: "/images/blog/neauvia/whats-neauvia-filler.webp",
    html: neauvia
  },
  {
    slug: "revitacare",
    title: "معرفی و راهنمای جامع محصولات رویتاکر و کاربردهای هر کدام",
    date: "2025-03-13",
    excerpt: "بررسی کامل محصولات رویتاکر از جمله مزو مو، مزو لاغری، سلولیت و کوکتل های جوانسازی پوست. آشنایی با ترکیبات، کاربردها و مزایا ، تعداد جلسات لازم و هزینه هر کدام",
    featured: "/images/blog/revitacare/type-of-revitacare-994x1024.webp",
    html: revitacare
  },
  {
    slug: "best-lip-filler-brands",
    title: "بهترین برند ژل لب در سال 2025",
    date: "2025-03-04",
    excerpt: "در دنیای زیبایی، فیلرهای لب به یکی از محبوب‌ترین روش‌های زیبایی تبدیل شده‌اند و راهی سریع و نسبتاً بدون درد برای داشتن لب‌هایی پرتر فراهم می‌کنند. با افزایش",
    featured: "/images/blog/best-lip-filler-brands/best-brands.webp",
    html: best_lip_filler_brands
  },
  {
    slug: "cheek-filler",
    title: "راهنمای تزریق ژل گونه برای انواع فرم صورت؛ هر آنچه باید بدانید",
    date: "2025-03-02",
    excerpt: "تزریق ژل گونه؛ بررسی هزینه، بهترین فیلر، میزان سی‌سی مورد نیاز، ماندگاری، عوارض و نمونه کارهای واقعی قبل و بعد از تزریق.",
    featured: "/images/blog/cheek-filler/what-is-cheek-filler.webp",
    html: cheek_filler
  },
  {
    slug: "revofil",
    title: "فیلر رووفیل؛ یک فیلر همه کاره برای افزایش زیبایی طبیعی",
    date: "2025-02-27",
    excerpt: "فیلر رووفیل ایمن‌ترین فیلر پوستی حاوی هیالورونیک اسید و پپتیدها با کیفیت بالا در بازار فعلی است که باعث افزایش سنتز کلاژن و هیالورونیک اسید درون‌زا شده و به",
    featured: "/images/blog/revofil/revofil-usages.webp",
    html: revofil
  },
  {
    slug: "teosyal",
    title: "آشنایی با فیلر تئوسیال؛ آیا این فیلر برای شما مناسب است؟",
    date: "2025-02-18",
    excerpt: "تئوسیال (TEOSYAL️) مجموعه‌ای از فیلرهای پوستی بر پایه اسید هیالورونیک است که با هدف افزایش یا بازگرداندن حجم و صاف کردن خطوط در صورت و گردن طراحی شده است.",
    featured: "/images/blog/teosyal/usages-teosyal️-filler.webp",
    html: teosyal
  },
  {
    slug: "stylage",
    title: "انواع فیلر استایلج؛ کاربردها، ماندگاری و هزینه",
    date: "2025-02-15",
    excerpt: "ژل استایلج با ماندگاری حدود 12 ماه اولین فیلر پوستی اسید هیالورونیک است که همزمان دارای بی‌حس‌کننده موضعی لیدوکائین و یک آنتی‌اکسیدان به نام مانیتول است.",
    featured: "/images/blog/stylage/different-types-of-stylage-filler-1020x1024.webp",
    html: stylage
  },
  {
    slug: "belotero",
    title: "معرفی ژل بلوترو و کاربردهای آن+هزینه و ماندگاری",
    date: "2025-02-09",
    excerpt: "بلوترو یک فیلر ساخت سوئیس است که بر پایه اسید هیالورونیک است و بیشتر برای تزریق در گونه‌ها، بینی، لب‌ها، چانه و نواحی اطراف چشم استفاده می‌شود.",
    featured: "/images/blog/belotero/belotero-filler-usages.webp",
    html: belotero
  },
  {
    slug: "juvederm",
    title: "راهنمای کامل تزریق ژل ژوویدرم؛ برند شماره یک فیلر در دنیا",
    date: "2025-02-08",
    excerpt: "ژل ژوویدرم، یک فیلر پوستی تزریقی با پایه اسید هیالورونیک است که با نتایج طبیعی و ماندگاری بالا به عنوان پرطرفدارترین فیلر نیز شناخته می‌شود.",
    featured: "/images/blog/juvederm/juvederms-benefits.webp",
    html: juvederm
  },
  {
    slug: "dysport",
    title: "بوتاکس دیسپورت، کاربردها، مزایا و ماندگاری+هزینه",
    date: "2025-02-04",
    excerpt: "بوتاکس دیسپورت یک نوع سم بوتولینوم نوع A است که برای کاهش چین و چروک های صورت، به ویژه در ناحیه پیشانی، خطوط اخم و چین های اطراف چشم کاربرد دارد.",
    featured: "/images/blog/dysport/dysport.webp",
    html: dysport
  },
  {
    slug: "hifu",
    title: "هایفوتراپی چیست و چه کاربردی دارد+هزینه",
    date: "2025-02-02",
    excerpt: "هایفوتراپی روشی غیرتهاجمی برای سفت کردن پوست با تحریک کلاژن است. نتایج آن پس از چند ماه ظاهر می‌شود و در حدود یک سال ماندگاری دارد.",
    featured: "/images/blog/hifu/hifu.webp",
    html: hifu
  },
  {
    slug: "restylane",
    title: "ژل رستیلن؛ کاربردها، مزایا، ماندگاری و هزینه",
    date: "2025-02-01",
    excerpt: "رستیلن یکی از معروف‌ترین برندهای فیلر پوستی مبتنی بر اسید هیالورونیک است که برای صاف کردن چین و چروک‌ها استفاده می‌شود و بیش از 9 نوع متفاوت می باشد",
    featured: "/images/blog/restylane/different-restylane-fillers-and-benefits.webp",
    html: restylane
  },
  {
    slug: "perfectha",
    title: "راهنمای کامل ژل پرفکتا و همه نکات آن+ماندگاری و هزینه",
    date: "2025-01-26",
    excerpt: "ژل پرفکتا، فیلر فرانسوی مبتنی بر هیالورونیک اسید است که برای جوانسازی، حجم دهی و رفع چین و چروک لب و صورت استفاده می‌شود.",
    featured: "/images/blog/perfectha/whats-perfectha-filler.webp",
    html: perfectha
  },
  {
    slug: "dermalstyle",
    title: "معرفی کامل فیلر درمال استایل و هر آنچه باید در مورد آن بدانید",
    date: "2025-01-21",
    excerpt: "فیلر درمال استایل یک ژل تزریقی مبتنی بر اسید هیالورونیک با ماندگاری بالا است که برای رفع خطوط صورت، حجم دهی لب و آبرسانی پوست طراحی شده است.",
    featured: "/images/blog/dermalstyle/features-of-dermal-style-light-filler2.webp",
    html: dermalstyle
  },
  {
    slug: "revanesse-filler",
    title: "فیلر ریوانس چیست و چه تفاوتی با ژل های دیگر دارد؟",
    date: "2025-01-16",
    excerpt: "ریوانس یک سری از فیلرهای پوستی مبتنی بر اسید هیالورونیک است، ماندگاری در حدود 12 ماه دارد و برای حجم دهی لب، گونه و خطوط عمیق صورت قابل استفاده است",
    featured: "/images/blog/revanesse-filler/whats-is-revanesse-filler.webp",
    html: revanesse_filler
  },
  {
    slug: "aliaxin-filler",
    title: "ژل الیاکسین، انواع، کاربردها، ماندگاری و هزینه (1405)",
    date: "2025-01-10",
    excerpt: "الیاکسین یک فیلر پوستی مبتنی بر اسید هیالورونیک فوق خالص ساخت ایتالیا است که برای حجم دهی صورت و لب، رفع خطوط ریز و چین و چروک‌ها قابل استفاده است",
    featured: "/images/blog/aliaxin-filler/aliaxin-gel-types.webp",
    html: aliaxin_filler
  },
  {
    slug: "neurafill-filler",
    title: "ژل نورافیل؛ همه چیز درباره فیلر نورافیل",
    date: "2025-01-08",
    excerpt: "ژل نورافیل یک نوع فیلر پوستی حاوی هیالورونیک اسید با ماندگاری 6 تا 12 ماه است که به منظور جوانسازی پوست و حجم‌ دهی در نواحی مثل لب مورد استفاده قرار می گیرد.",
    featured: "/images/blog/neurafill-filler/diffrent-uses-of-neurafill.webp",
    html: neurafill_filler
  },
  {
    slug: "botox-injection",
    title: "تزریق بوتاکس | هزینه، عوارض، ماندگاری و مراقبت بعد",
    date: "2025-01-05",
    excerpt: "تزریق بوتاکس یک روش غیرتهاجمی برای کاهش چین و چروک های صورت، به ویژه در نواحی پیشانی، دور چشم و خط اخم و درمان تعریق بیش از حد در نواحی مختلف بدن است.",
    featured: "/images/blog/botox-injection/what-is-botox.webp",
    html: botox_injection
  },
  {
    slug: "facial-blemishes-laser-treatment",
    title: "لیزر لک صورت؛ هزینه، ماندگاری، مزایا و بهترین دستگاه",
    date: "2024-12-29",
    excerpt: "در درمان با لیزر لک صورت، از پالس‌های مخصوصی برای هدف قرار دادن رنگدانه‌های لک پوست استفاده می شود که به صورت ایمن و موثر لک‌ها و ضایعات پوست را از بین می‌برد.",
    featured: "/images/blog/facial-blemishes-laser-treatment/what-is-face-spots.webp",
    html: facial_blemishes_laser_treatment
  },
  {
    slug: "feet-botox",
    title: "بوتاکس کف پا چیست؟ هزینه، ماندگاری و مراقبت های لازم",
    date: "2024-12-28",
    excerpt: "با تزریق بوتاکس به کف پا، سیگنال های عصبی محرک تعریق مسدود می شود و میزان تعریق کاهش می یابد. این روش یکی از راههای خوب برای درمان تعریق بیش از حد کف پا می باشد",
    featured: "/images/blog/feet-botox/botox-for-sweaty-feet.webp",
    html: feet_botox
  },
  {
    slug: "laser-hair-removal",
    title: "لیزر موهای زائد(لیست قیمت، تعداد جلسات، مقایسه دستگاهها)",
    date: "2024-12-24",
    excerpt: "لیزر موهای زائد: نکاتی که باید قبل از جلسه اول بدانید! از اهمیت آماده سازی تا جلوگیری از سوختگی و عوارض جانبی+ معرفی بهترین دستگاه لیزر مو سال 2025",
    featured: "/images/blog/laser-hair-removal/proscess-of-laser-hair-remoal.webp",
    html: laser_hair_removal
  },
  {
    slug: "deka-laser",
    title: "معرفی کامل لیزر دکا و مقایسه آن با سایر لیزرها+لیست قیمت",
    date: "2024-12-16",
    excerpt: "لیزر دکا ساخت ایتالیا با سیستم خنک کنندگی قوی، مناسب انواع تایپ پوست و مو(روشن تا تیره)، بدون درد+مقایسه با کندلا و سایناشور",
    featured: "/images/blog/deka-laser/introduction-of-laser-deka-device.webp",
    html: deka_laser
  },
  {
    slug: "xeomin-botox",
    title: "آشنایی با بوتاکس زئومین، ماندگاری و مقایسه با سایر برندها",
    date: "2024-12-15",
    excerpt: "بوتاکس زئومین ساخت آلمان بدون پروتئین اضافی با اثری سریع و ماندگاری 3 تا 6 ماه، انتخابی مطمئن برای درمان چین و چروک صورت و پیشانی است",
    featured: "/images/blog/xeomin-botox/xeomin-vs-dysport-neuronox.webp",
    html: xeomin_botox
  },
  {
    slug: "lip-gel-injection",
    title: "راهنمای کامل تزریق ژل لب؛ انواع مدل، ماندگاری و هزینه",
    date: "2024-12-12",
    excerpt: "تزریق فیلر لب با استفاده از بهترین برندهای ژل برای حجم دهی و تقارن لب ها. همه چیز درباره مراحل، مراقبت ها، مقایسه با پروتز لب، عوارض و قیمت(با عکس نمونه کار)",
    featured: "/images/blog/lip-gel-injection/whats-lip-filler.webp",
    html: lip_gel_injection
  },
  {
    slug: "ellanse-filler",
    title: "ژل الانسه چیست؟ کاربردها، مزایا و هزینه تزریق",
    date: "2024-12-09",
    excerpt: "ژل الانسه ساخت هلند یکی از جدیدترین فیلرهای پوستی است که با تحریک تولید کلاژن طبیعی، علاوه بر رفع خطوط صورت، ماندگاری طولانی مدتی بین 1 تا 4 سال دارد.",
    featured: "/images/blog/ellanse-filler/ellanse-filler-uses.webp",
    html: ellanse_filler
  },
  {
    slug: "facial-mesotherapy",
    title: "مزوتراپی صورت چیست؛ کاربردها، مزایا، عوارض و هزینه",
    date: "2024-12-07",
    excerpt: "مزوتراپی صورت یک روش غیر جراحی و تقریباً کم تهاجم است که در آن مواد مغذی و تغذیه کننده پوست به با سوزن‌های بسیار ظریف به پوست تزریق می‌شوند.",
    featured: "/images/blog/facial-mesotherapy/whats-face-mesotherapy.webp",
    html: facial_mesotherapy
  },
  {
    slug: "underarm-botox",
    title: "بوتاکس زیر بغل: کاربردها، مزایا، عوارض و هزینه",
    date: "2024-12-04",
    excerpt: "بوتاکس زیر بغل یعنی تزریق ماده‌ای به نام سم بوتولینوم در ناحیه زیر بغل برای کاهش تعریق در کسانی که از تعریق بیش از حد یا هایپرهیدروزیس رنج می برند",
    featured: "/images/blog/underarm-botox/botox-injection-under-armpits.webp",
    html: underarm_botox
  },
  {
    slug: "mesoneedling",
    title: "مزونیدلینگ چیست، کاربردها، مزایا و هزینه",
    date: "2024-11-30",
    excerpt: "مزونیدلینگ، روشی جامع برای مراقبت از پوست است که با ترکیب میکرونیدلینگ و مزوتراپی، نتایج قابل توجهی در بهبود ظاهر پوست و مو ایجاد می‌کند.",
    featured: "/images/blog/mesoneedling/whats-mesoneedling.webp",
    html: mesoneedling
  },
  {
    slug: "masport-botox",
    title: "معرفی کامل بوتاکس مصپورت:ماندگاری، عوارض و هزینه",
    date: "2024-11-25",
    excerpt: "بوتاکس مصپورت یکی از بوتاکس های ایرانی است که توسط شرکت مصون دارو ساخته شد و 4 تا 6 ماه ماندگاری دارد و جزء بوتاکس های با کیفیت ولی ارزان به شمار می رود",
    featured: "/images/blog/masport-botox/masport-botox.webp",
    html: masport_botox
  },
  {
    slug: "neuronox-botox",
    title: "راهنمای تزریق بوتاکس نورونوکس: مزایا و معایب+هزینه",
    date: "2024-11-22",
    excerpt: "آیا بوتاکس نورونوکس برای شما مناسب است؟ در این مقاله، کاربردها، ماندگاری، عوارض، مزایا، هزینه تزریق و مراقبت های بعد از تزریق را بررسی کرده ایم.",
    featured: "/images/blog/neuronox-botox/neuronox-versus-other-brands2.webp",
    html: neuronox_botox
  },
  {
    slug: "palm-botox",
    title: "همه چیز درباره بوتاکس کف دست: هزینه، عوارض و ماندگاری",
    date: "2024-11-19",
    excerpt: "بوتاکس کف دست، درمانی است که شامل تزریق سم بوتولینوم به کف دست ها می شود تا به طور موقت سیگنال های عصبی غدد عرق را غیر فعال کند و باعث کاهش تعریق شود",
    featured: "/images/blog/palm-botox/what-is-palm-botox.webp",
    html: palm_botox
  },
  {
    slug: "hair-mesotherapy",
    title: "مزوتراپی مو چیست:کاربردها،هزینه،مقایسه با پی آر پی و فیلر مو",
    date: "2024-11-17",
    excerpt: "در این مقاله کاربردهای مزوتراپی مو، هزینه در سال 1405، بهترین برندها، مقایسه با prp و هیرفیلر و مزایا و معایب این روش محبوب برای درمان ریزش مو را بررسی می کنیم.",
    featured: "/images/blog/hair-mesotherapy/whats-hair-mesotherapy.webp",
    html: hair_mesotherapy
  },
  {
    slug: "the-best-mesogel-injection-doctor-in-tehran",
    title: "بهترین دکتر تزریق مزوژل در تهران کیست و چه ویژگی‌هایی دارد؟",
    date: "2024-11-13",
    excerpt: "در این مطلب به مهم ترین ویژگی هایی که باید بهترین دکتر تزریق مزوژل داشته باشد پرداخته ایم.+ معرفی دکتر خوب برای تزریق مزوژل در تهران",
    featured: "/images/blog/the-best-mesogel-injection-doctor-in-tehran/best-mesogel-injecton-doctors-qualities.webp",
    html: the_best_mesogel_injection_doctor_in_tehran
  },
  {
    slug: "jalupro",
    title: "جالپرو چیست و چقدر ماندگاری دارد+هزینه تزریق هر جلسه",
    date: "2024-11-07",
    excerpt: "جالپرو نوعی مزوژل جوانساز است که در انواع مختلفی مثل جالپرو کلاسیک یا آبی و صورتی عرضه شده که هر کدام کاربرد خاصی دارد",
    featured: "/images/blog/jalupro/whats-jalupro.webp",
    html: jalupro
  },
  {
    slug: "dyston-botox",
    title: "همه چیز در مورد بوتاکس دیستون(هزینه تزریق، مزایا، عوارض و کاربردها)",
    date: "2024-11-04",
    excerpt: "بوتاکس دیستون نوعی بوتاکس ایرانی است که از سم بوتولینوم ساخته شده است. در این مطلب 0 تا 100 این بوتاکس را ذکر کردیم+(هزینه، عوارض، کاربردها)",
    featured: "/images/blog/dyston-botox/dyston-botox-aftercare.webp",
    html: dyston_botox
  },
  {
    slug: "facial",
    title: "فیشیال صورت چیست و هزینه آن چقدر است(کاربردها، مزایا و انواع)",
    date: "2024-11-02",
    excerpt: "راهنمای کامل مرحله به مرحله فیشال صورت به همراه قیمت فیشیال در تهران + توضیحات انواع نورها و کاربرد هر کدام و راهنمایی در مورد انجام آن در خانه",
    featured: "/images/blog/facial/whats-facial-therapy.webp",
    html: facial
  },
  {
    slug: "under-eye-mesotherapy",
    title: "راهنمای کامل مزوتراپی زیر چشم، مزایا، کاربردها، عوارض و معرفی بهترین برند مزو چشم",
    date: "2024-10-30",
    excerpt: "مزوتراپی زیر چشم، با ترکیبات مغذی و آبرسان، پوست دور چشم شما را جوان و شاداب کرده و برای کاهش تیرگی و پف بسیار موثر است(+مقایسه با تزریق مزوژل و فیلر زیر چشم)",
    featured: "/images/blog/under-eye-mesotherapy/whats-eye-mesotherapy.webp",
    html: under_eye_mesotherapy
  },
  {
    slug: "the-best-doctor-for-botox-injection-in-tehran",
    title: "3 نکته خیلی مهم در انتخاب بهترین دکتر برای تزریق بوتاکس",
    date: "2024-10-27",
    excerpt: "در این مقاله به 3 نکته مهم برای انتخاب بهترین دکتر برای تزریق بوتاکس در تهران پرداخته ایم که کمتر کسی به آن توجه می کند.",
    featured: "/images/blog/the-best-doctor-for-botox-injection-in-tehran/best-botox-doctor-in-tehran.webp",
    html: the_best_doctor_for_botox_injection_in_tehran
  },
  {
    slug: "profhilo",
    title: "پروفایلو چیست، ماندگاری، هزینه و مراقبت های بعد از تزریق",
    date: "2024-10-26",
    excerpt: "ژل پروفایلو، بر پایه هیالورونیک اسید است که به‌جای حجم دادن به صورت آن را عمیقا آبرسانی کرده و سلول‌های پوست شما را به ساخت کلاژن و الاستین جدید تحریک می‌کند.",
    featured: "/images/blog/profhilo/whats-profilo.webp",
    html: profhilo
  },
  {
    slug: "sunekos",
    title: "سونه کاس چیست و چه فرقی با پروفایلو و جالپرو دارد+هزینه تزریق",
    date: "2024-10-21",
    excerpt: "سونه کاس یک مزوژل جوانساز ساخت ایتالیا می باشد، در این مقاله به عوارض، کاربردها، مراقبت های لازم بعد از تزریق و مقایسه سونه کاس با برندهای دیگر میپردازیم",
    featured: "/images/blog/sunekos/whats-sunekos.webp",
    html: sunekos
  },
  {
    slug: "thermage",
    title: "ترماژ دستگاه جدیدی که در چند ساعت شما را جوان می‌کند",
    date: "2024-10-16",
    excerpt: "ترماژ یک دستگاه جوانسازی و لیفت پوست صورت، چشم،شکم و سایر نقاط بدن می باشد که ساخت آمریکا است، که مزایا و کاربردهای زیاد و بدون عوارض که هزینه آن نسبتا بالا است",
    featured: "/images/blog/thermage/whats-thermage.webp",
    html: thermage
  },
  {
    slug: "fraxel-laser",
    title: "لیزر فرکسل بهترین دستگاه برای درمان مشکلات پوستی کودکی تا بزرگسالی",
    date: "2024-10-13",
    excerpt: "لیزر فرکسل جدیدترین دستگاه لیزر جوانساز و درمان مشکلات پوستی با 2 طول موج مختلف ساخت آمریکا که برای از بین بردن جای سوختگی، جای جوش، لک و کک و مک کاربرد دارد.",
    featured: "/images/blog/fraxel-laser/what-is-fraxel-laser.webp",
    html: fraxel_laser
  },
  {
    slug: "microneedling",
    title: "میکرونیدلینگ چیست و چه کاربردی دارد",
    date: "2024-10-08",
    excerpt: "میکرونیدلینگ یکی از روش‌های زیباسازی پوست است که با استفاده از سوزن‌های ریز و استریل‌شده باعث کلاژن‌سازی می‌شود. این روش همچنین باعث ایجاد پوستی صاف، سفت و",
    featured: "/images/blog/microneedling/benefits-of-microneedling.webp",
    html: microneedling
  }
];

export function getArticle(slug: string): Article | null {
  return articles.find((article) => article.slug === slug) ?? null;
}

export const articleSlugs = articles.map((article) => article.slug);
