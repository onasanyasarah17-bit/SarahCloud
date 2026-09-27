
import { Component } from '@angular/core';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  type: 'Tech Certificate' | 'Soft Skills Certificate';
}

@Component({
  selector: 'app-certificates',
  standalone: true,

  template: `
    <section class="certificates">

      <div class="container">

        <!-- =========================
             HEADER
             ========================= -->

        <div class="certificates-header">

          <span class="label">
            CERTIFICATES
          </span>

          <h1>
            Certifications
            <span>& Credentials</span>
          </h1>

          <p>
            A collection of certifications that document my technical
            knowledge, professional development, and continuous learning.
          </p>

        </div>


        <!-- =========================
             TECH CERTIFICATES
             ========================= -->

        <section class="certificate-section">

          <div class="section-title">

            <span>01</span>

            <h2>
              Tech Certificates
            </h2>

          </div>


          <div class="certificate-list">

            @for (cert of techCertificates; track cert.id) {

              <article class="certificate-card">

                <!-- Certificate Image -->

                <div class="certificate-image">

                  <img
                    [src]="cert.image"
                    [alt]="cert.title"
                  >

                </div>


                <!-- Certificate Details -->

                <div class="certificate-info">

                  <span class="certificate-type">
                    {{ cert.type }}
                  </span>

                  <h3>
                    {{ cert.title }}
                  </h3>

                  <p class="issuer">
                    {{ cert.issuer }}
                  </p>

                  <p class="date">
                    {{ cert.date }}
                  </p>

                </div>

              </article>

            }

          </div>

        </section>


        <!-- =========================
             SOFT SKILLS CERTIFICATES
             ========================= -->

        <section class="certificate-section">

          <div class="section-title">

            <span>02</span>

            <h2>
              Soft Skills Certificates
            </h2>

          </div>


          <div class="certificate-list">

            @for (cert of softSkillsCertificates; track cert.id) {

              <article class="certificate-card">

                <!-- Certificate Image -->

                <div class="certificate-image">

                  <img
                    [src]="cert.image"
                    [alt]="cert.title"
                  >

                </div>


                <!-- Certificate Details -->

                <div class="certificate-info">

                  <span class="certificate-type">
                    {{ cert.type }}
                  </span>

                  <h3>
                    {{ cert.title }}
                  </h3>

                  <p class="issuer">
                    {{ cert.issuer }}
                  </p>

                  <p class="date">
                    {{ cert.date }}
                  </p>

                </div>

              </article>

            }

          </div>

        </section>

      </div>

    </section>
  `,


  /* =====================================================
     CSS
     ===================================================== */

  styles: [`

    /* ===============================
       PAGE
       =============================== */

    .certificates {
      min-height: 100vh;

      background: url('/images/home-bg.png') no-repeat center center / cover;

      color: #ffffff;

      padding: 150px 7% 120px;

      overflow: hidden;
    }


    .container {
      width: 100%;
      max-width: 1100px;

      margin: 0 auto;
    }


    /* ===============================
       HEADER
       =============================== */

    .certificates-header {
      max-width: 900px;

      margin: 0 auto 110px;
    }


    .label {
      display: block;

      margin-bottom: 25px;

      color: #a78bfa;

      font-size: 0.7rem;

      font-weight: 600;

      letter-spacing: 0.18em;
    }


    .certificates-header h1 {
      margin: 0 0 30px;

      font-size: clamp(4rem, 6vw, 7rem);

      line-height: 0.9;

      letter-spacing: -0.06em;

      font-weight: 600;
    }


    .certificates-header h1 span {
      display: block;

      color: #8b5cf6;
    }


    .certificates-header p {
      max-width: 600px;

      margin: 0;

      color: #ffffff;

      font-size: 1rem;

      line-height: 1.8;
    }


    /* ===============================
       CERTIFICATE SECTION
       =============================== */

    .certificate-section {
      margin-bottom: 120px;
    }


    .certificate-section:last-child {
      margin-bottom: 0;
    }


    /* ===============================
       SECTION TITLE
       =============================== */

    .section-title {
      display: flex;

      align-items: center;

      gap: 20px;

      margin-bottom: 40px;
    }


    .section-title span {
      color: #8b5cf6;

      font-size: 0.7rem;

      font-weight: 600;

      letter-spacing: 0.1em;
    }


    .section-title h2 {
      margin: 0;

      color: #ffffff;

      font-size: 2rem;

      font-weight: 500;

      letter-spacing: -0.03em;
    }


    /* ===============================
       CERTIFICATE GRID
       =============================== */

    .certificate-list {
      display: grid;

      grid-template-columns:
        repeat(3, minmax(0, 1fr));

      gap: 30px;
    }


    /* ===============================
       CERTIFICATE CARD
       =============================== */

    .certificate-card {
      min-width: 0;

      background:
        rgba(139, 92, 246, 0.04);

      border:
        1px solid rgba(139, 92, 246, 0.2);

      border-radius: 18px;

      overflow: hidden;

      transition:
        transform 0.3s ease,
        border-color 0.3s ease,
        background 0.3s ease;
    }


    .certificate-card:hover {
      transform: translateY(-6px);

      border-color:
        rgba(139, 92, 246, 0.6);

      background:
        rgba(139, 92, 246, 0.08);
    }


    /* ===============================
       CERTIFICATE IMAGE
       =============================== */

    .certificate-image {
      width: 100%;

      height: 280px;

      display: flex;

      align-items: center;

      justify-content: center;

      background: #0c0918;

      overflow: hidden;
    }


    .certificate-image img {
      width: 100%;

      height: 100%;

      display: block;

      object-fit: contain;

      padding: 12px;

      box-sizing: border-box;
    }


    /* ===============================
       CERTIFICATE INFORMATION
       =============================== */

    .certificate-info {
      padding: 20px;
    }


    .certificate-type {
      display: block;

      margin-bottom: 10px;

      color: #a78bfa;

      font-size: 0.62rem;

      font-weight: 600;

      letter-spacing: 0.14em;

      text-transform: uppercase;
    }


    .certificate-info h3 {
      margin: 0 0 12px;

      color: #ffffff;

      font-size: 1.3rem;

      line-height: 1.3;

      font-weight: 500;

      letter-spacing: -0.02em;
    }


    .issuer {
      margin: 0 0 6px;

      color: #d5d1df;

      font-size: 0.85rem;

      line-height: 1.5;
    }


    .date {
      margin: 0;

      color: #777284;

      font-size: 0.72rem;
    }


    /* ===============================
       TABLET
       =============================== */

    @media (min-width: 601px) and (max-width: 900px) {

      .certificates {
        padding: 120px 6% 90px;
      }


      .certificates-header {
        margin-bottom: 80px;
      }


      .certificates-header h1 {
        font-size:
          clamp(3.5rem, 8vw, 6rem);
      }


      .certificates-header p {
        font-size: 0.95rem;

        line-height: 1.7;
      }


      .certificate-section {
        margin-bottom: 90px;
      }


      .section-title {
        margin-bottom: 30px;
      }


      .section-title h2 {
        font-size: 1.7rem;
      }


      .certificate-list {
        grid-template-columns:
          repeat(2, minmax(0, 1fr));

        gap: 20px;
      }


      .certificate-card {
        border-radius: 15px;
      }


      .certificate-image {
        height: 210px;
      }


      .certificate-info {
        padding: 20px;
      }


      .certificate-info h3 {
        font-size: 1.1rem;
      }


      .issuer {
        font-size: 0.78rem;
      }

    }


    /* ===============================
       MOBILE
       =============================== */

    @media (max-width: 600px) {

      .certificates {
        padding: 110px 6% 70px;
      }


      .certificates-header {
        margin-bottom: 65px;
      }


      .label {
        margin-bottom: 18px;

        font-size: 0.65rem;
      }


      .certificates-header h1 {
        font-size:
          clamp(2.8rem, 12vw, 4rem);

        line-height: 0.95;

        margin-bottom: 22px;
      }


      .certificates-header p {
        font-size: 0.82rem;

        line-height: 1.65;
      }


      .certificate-section {
        margin-bottom: 75px;
      }


      .section-title {
        gap: 12px;

        margin-bottom: 25px;
      }


      .section-title span {
        font-size: 0.62rem;
      }


      .section-title h2 {
        font-size: 1.35rem;
      }


      .certificate-list {
        grid-template-columns: 1fr;

        gap: 25px;
      }


      .certificate-card {
        border-radius: 15px;
      }


      .certificate-image {
        height: 220px;
      }


      .certificate-image img {
        padding: 10px;
      }


      .certificate-info {
        padding: 20px;
      }


      .certificate-type {
        margin-bottom: 10px;

        font-size: 0.58rem;
      }


      .certificate-info h3 {
        font-size: 1.1rem;
      }


      .issuer {
        font-size: 0.78rem;
      }


      .date {
        font-size: 0.7rem;
      }

    }

  `]
})


export class CertificatesComponent {


  /* =====================================================
     TECH CERTIFICATES
     ===================================================== */

  techCertificates: Certificate[] = [

    {
      id: 'tech-001',

      title: 'DevOps & Cloud Engineering',

      issuer: 'She Code Africa Academy',

      date: '2026',

      type: 'Tech Certificate',

      image: '/images/SCA-Certificate.png'
    },


    {
      id: 'tech-002',

      title: 'Software Development',

      issuer: 'Women Techsters',

      date: '2026',

      type: 'Tech Certificate',

      image: '/images/WTB-Certificate.png'
    },

    {
      id: 'tech-003',

      title: 'Cloud Build With Peers',

      issuer: 'Akwannya Hub',

      date: '2026',

      type: 'Tech Certificate',

      image: '/images/Akwannya-Hub.png'
    },

  ];
  
 

  /* =====================================================
     SOFT SKILLS CERTIFICATES
     ===================================================== */

  softSkillsCertificates: Certificate[] = [

    {
      id: 'soft-001',

      title: 'Aspire Leaders Program',

      issuer: 'Aspire Institute',

      date: '2026',

      type: 'Soft Skills Certificate',

      image: '/images/Aspire-Certificate.png'
    },


    {
      id: 'soft-002',

      title: 'Critical Thinking',

      issuer: 'HP Life / HP Foundation',

      date: '2026',

      type: 'Soft Skills Certificate',

      image: '/images/HP-Life-Certificate.png'
    }

  ];

}
