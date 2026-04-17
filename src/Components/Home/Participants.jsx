import React from "react";
import "react-multi-carousel/lib/styles.css";
//Image Resources
import Bezaleel from "../../assets/img/users/Testimoni Beza.png";
import Frisy from "../../assets/img/users/Bootcamp - Frisy.png";
import Arnold from "../../assets/img/users/Bootcamp - Arnold.png";
import Seto from "../../assets/img/users/Elective - Seto.png";
import Rifky from "../../assets/img/users/Elective - Rifky.png";
import Harry from "../../assets/img/users/Elective - Harry.png";
import Shafa from "../../assets/img/users//Bootcamp - Shafa.png";
import Aulia from "../../assets/img/users/Testimoni Default.webp";

import ParticipantCard from "../../Utils/ParticipantCard";
import Marquee from "react-fast-marquee";

function Participants() {
  let participants = [
    {
      name: "Rifky",
      role: "Peserta English Course 2024",
      insight: "Confidence Boost",
      message:
        "Training ini sangat membantu saya untuk lebih percaya diri lagi jika suatu saat saya menghadapi kondisi professional harus menggunakan bahasa inggris, terutama untuk  job interview menggunakan bahasa inggris.",
      profile_pic: Rifky,
    },
    {
      name: "Rizky Aulia",
      role: "Peserta Mobile Dev Course 2401",
      insight: "Structured Delivery",
      message:
        "Course dari WIDE Edu sangat bermanfaat. Penyampaian materi disampaikan secara terstruktur dan rapih, serta bahasa yang digunakan mudah untuk dipahami membuat saya dapat mudah memahami materi yang disampaikan.",
      profile_pic: Aulia,
    },
    {
      name: "Frisy",
      role: "Peserta The Digital Bootcamp batch 5/2024",
      insight: "Enjoyable Delivery",
      message:
        "Detail dan pembawaan materi dijelaskan dengan baik, bahkan untuk topik kompleks pun bisa dijelaskan dengan pembawaan santai dimana mempermudah saya untuk memahami materinya.",
      profile_pic: Frisy,
    },
    {
      name: "Shafa",
      role: "Peserta The Digital Bootcamp batch 4/2024",
      insight: "Challenging Task",
      message:
        "Tugas yang diberikan sangat mendorong saya untuk mengulik lagi recording materi materi sebelumnya, sehingga dorongan belajar menjadi lebih kuat.",
      profile_pic: Shafa,
    },
    {
      name: "Bezaleel",
      role: "Peserta The Digital Bootcamp batch 3/2024",
      insight: "Lovely Technical Knowledge",
      message:
        "Saya mendapatkan banyak sekali ilmu dimana diajarkan Spingboot dan API Java untuk Backend. Sukses selalu Wide Edu",
      profile_pic: Bezaleel,
    },
    {
      name: "Harry",
      role: "Peserta DevOps Training Tokio Marine Life Insurance",
      insight: "Expert Trainer",
      message:
        "Trainernya itu expert banget dibidangnya, selain itu dia juga sudah tersertifikasi GDE (Google Developer Expeert) Indonesia. Jadi, kita bisa mengadopt best practice-nya dan juga jadi penyemangat kita untuk mengimplementasikan semua ilmu yang telah diajarkan selama training bareng WIDE Edu.",
      profile_pic: Harry,
    },
    {
      name: "Seto",
      role: "Peserta DevOps Training Tokio Marine Life Insurance",
      insight: "Hands-on Experience",
      message:
        "Selama saya berkarir di profesional, baru kali ini ikut training yang banyak prakteknya. Biasanya training itu lebih banyak teorinya. Tapi, kalo ini banyak sekali prakteknya, challenge-nya, trainernya juga yang expert, jadi kita bisa belajar lebih jauh dan punya gambaran ke depannya harus seperti apa.",
      profile_pic: Seto,
    },
    {
      name: "Arnold Siahaan",
      role: "Peserta The Digital Bootcamp batch 2/2024",
      insight: "Communicative Trainer",
      message:
        "Trainer cukup fast respond dan terbuka untuk diskusi permasalahan source code di luar jam bootcamp serta cukup solutif dalam memberikan jawaban. Semoga kedepannya hal ini tetap dipertahankan. Trainer sudah bagus dalam memberikan feedback yang membangun bagi masing-masing peserta.",
      profile_pic: Arnold,
    },
  ];

  const participants_split = participants.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 2);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 7000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 796, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="px-5 my-10 md:px-24">
      <div className="text-center f-1 text-teal-600 text-3xl md:text-[50px] font-extrabold leading-[65.10px]">
        User Testimony
      </div>
      <Marquee speed={100} gradient gradientWidth={10}>
        <div
          id="track"
          className="participants flex items-center pb-10 justify-center md:w-[200vw] lg:w-[120vw] xl:[100vw] w-[300vw]"
        >
          {participants_split.map((participants, i) => (
            <div id="track-group" className={`flex flex-col md:w-1/3`}>
              <ParticipantCard
                key={i + 1}
                name={participants[0].name}
                role={participants[0].role}
                profile_pic={participants[0].profile_pic}
                insight={participants[0].insight}
                index={0}
                message={participants[0].message}
              />
              <ParticipantCard
                key={i + 2}
                name={participants[1].name}
                role={participants[1].role}
                profile_pic={participants[1].profile_pic}
                insight={participants[1].insight}
                index={1}
                message={participants[1].message}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Participants;
