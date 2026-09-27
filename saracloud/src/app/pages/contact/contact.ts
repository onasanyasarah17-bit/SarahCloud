import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],

  template: `
    <section class="contact">

      <div class="contact-container">

        <!-- =========================
             HEADER
             ========================= -->

        <div class="contact-header">

          <span class="label">
            CONTACT
          </span>

          <h1>
            Let's
            <span>Connect.</span>
          </h1>

          <p class="subtitle">
            Have a question, opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>

        </div>


        <!-- =========================
             CONTACT CONTENT
             ========================= -->

        <div class="contact-content">


          <!-- =========================
               CONTACT INFORMATION
               ========================= -->

          <div class="contact-info">

            <span class="info-label">
              GET IN TOUCH
            </span>

            <h2>
              Let's start a conversation.
            </h2>

            <p>
              Whether it's a collaboration, an opportunity, or a
              conversation about technology, cloud engineering, or
              software development, feel free to reach out.
            </p>


            <!-- CONTACT DETAILS -->

            <div class="contact-details">


              <!-- GMAIL -->

              <a
                href="mailto:onasanysarah17@gmail.com"
                class="contact-item"
              >

                 <span class="contact-icon">
                   <img src="/images/Gmail-logo.png" alt="Gmail-logo">
                </span>

                <div>
                  <small>Email</small>
                  <strong>onasanysarah17@gmail.com</strong>
                </div>

              </a>

               <!-- WHATSAPP -->

             <a
                href="https://wa.me/+2349027604001"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-item"
              >

              <span class="contact-icon">
              <img
              src="/images/WhatsApp-logo.png"
              alt="WhatsApp"
             >
             </span>

             <div>
               <small>WhatsApp</small>
               <strong>Chat with me on WhatsApp</strong>
               </div>

              </a>


              <!-- GITHUB -->

              <a
                href="https://github.com/onasanyasarah17-bit/"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-item"
              >

                <span class="contact-icon">
                   <img src="/images/GitHub-logo.png" alt="GitHub">
                </span>


                <div>
                  <small>GitHub</small>
                  <strong>github.com/onasanyasarah17-bit</strong>
                </div>

              </a>


              <!-- LINKEDIN -->

              <a
                href="https://www.linkedin.com/in/sarah-onasanya-6987b3392"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-item"
              >

                <span class="contact-icon">
                   <img src="/images/Linkedin.png" alt="LinkedIn">
                </span>

                <div>
                  <small>LinkedIn</small>
                  <strong>linkedin.com/in/sarah-onasanya-6987b3392</strong>
                </div>

              </a>

            </div>

          </div>


          <!-- =========================
               CONTACT FORM
               ========================= -->

          <form
            [formGroup]="contactForm"
            (ngSubmit)="onSubmit()"
            class="contact-form"
          >

            <div class="form-row">

              <!-- NAME -->

              <div class="form-group">

                <label for="name">
                  Name *
                </label>

                <input
                  type="text"
                  id="name"
                  formControlName="name"
                  placeholder="Your name"
                  class="form-input"
                />

                @if (
                  contactForm.get('name')?.invalid &&
                  contactForm.get('name')?.touched
                ) {
                  <span class="error">
                    Name is required
                  </span>
                }

              </div>


              <!-- EMAIL -->

              <div class="form-group">

                <label for="email">
                  Email *
                </label>

                <input
                  type="email"
                  id="email"
                  formControlName="email"
                  placeholder="your@email.com"
                  class="form-input"
                />

                @if (
                  contactForm.get('email')?.invalid &&
                  contactForm.get('email')?.touched
                ) {
                  <span class="error">
                    Please enter a valid email
                  </span>
                }

              </div>

            </div>


            <!-- SUBJECT -->

            <div class="form-group">

              <label for="subject">
                Subject *
              </label>

              <input
                type="text"
                id="subject"
                formControlName="subject"
                placeholder="What's this about?"
                class="form-input"
              />

              @if (
                contactForm.get('subject')?.invalid &&
                contactForm.get('subject')?.touched
              ) {
                <span class="error">
                  Subject is required
                </span>
              }

            </div>


            <!-- MESSAGE -->

            <div class="form-group">

              <label for="message">
                Message *
              </label>

              <textarea
                id="message"
                formControlName="message"
                placeholder="Your message..."
                rows="7"
                class="form-input"
              ></textarea>

              @if (
                contactForm.get('message')?.invalid &&
                contactForm.get('message')?.touched
              ) {
                <span class="error">
                  Message is required
                </span>
              }

            </div>


            <!-- SUBMIT -->

            <button
              type="submit"
              [disabled]="contactForm.invalid || isSubmitting()"
              class="submit-btn"
            >

              <span>
                {{ isSubmitting() ? 'Sending...' : 'Send Message' }}
              </span>

              <span class="arrow">
                →
              </span>

            </button>


            <!-- RESPONSE -->

            @if (submitMessage()) {

              <p
                class="submit-message"
                [class.success]="submitSuccess()"
              >
                {{ submitMessage() }}
              </p>

            }

          </form>

        </div>

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

    .contact {
      min-height: 100vh;
      padding: 150px 7% 120px;
      color: #ffffff;

      background:
        url('/images/home-bg.png')
        no-repeat center center / cover;

      overflow: hidden;
    }


    .contact-container {
      width: 100%;
      max-width: 1150px;
      margin: 0 auto;
    }


    /* ===============================
       HEADER
       =============================== */

    .contact-header {
      max-width: 850px;
      margin-bottom: 100px;
    }


    .label {
      display: block;
      margin-bottom: 25px;
      color: #a78bfa;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.18em;
    }


    .contact-header h1 {
      margin: 0 0 30px;
      font-size: clamp(4rem, 8vw, 7rem);
      line-height: 0.9;
      letter-spacing: -0.06em;
      font-weight: 600;
    }


    .contact-header h1 span {
      display: block;
      color: #8b5cf6;
    }


    .subtitle {
      max-width: 600px;
      margin: 0;
      color: #ffffff;
      font-size: 1rem;
      line-height: 1.8;
    }


    /* ===============================
       CONTENT
       =============================== */

    .contact-content {
      display: grid;
      grid-template-columns: 0.8fr 1.2fr;
      gap: 80px;
      align-items: start;
    }


    /* ===============================
       CONTACT INFO
       =============================== */

    .contact-info {
      padding-top: 10px;
    }


    .info-label {
      display: block;
      margin-bottom: 20px;
      color: #a78bfa;
      font-size: 0.65rem;
      font-weight: 600;
      letter-spacing: 0.15em;
    }


    .contact-info h2 {
      margin: 0 0 25px;
      color: #ffffff;
      font-size: 2.2rem;
      line-height: 1.1;
      font-weight: 500;
      letter-spacing: -0.04em;
    }


    .contact-info > p {
      max-width: 450px;
      margin: 0 0 40px;
      color: #ffffff;
      font-size: 0.9rem;
      line-height: 1.8;
    }


    /* ===============================
       CONTACT DETAILS
       =============================== */

    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }


    .contact-item {
      display: flex;
      align-items: center;
      gap: 15px;
      width: fit-content;
      color: #ffffff;
      text-decoration: none;
    }


    .contact-icon {
      width: 42px;
      height: 42px;
      flex-shrink: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid rgba(139, 92, 246, 0.3);
      border-radius: 50%;

      color: #a78bfa;

      transition:
        background 0.3s ease,
        border-color 0.3s ease,
        transform 0.3s ease;
    }


    .contact-icon svg {
      width: 21px;
      height: 21px;
      fill: currentColor;
    }


    .linkedin-icon {
      font-family: Arial, sans-serif;
      font-size: 0.9rem;
      font-weight: 700;
    }


    .contact-item:hover .contact-icon {
      background: rgba(139, 92, 246, 0.12);
      border-color: #8b5cf6;
      transform: translateY(-2px);
    }


    .contact-item div {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }


    .contact-item small {
      color: #ffffff;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }


    .contact-item strong {
      color: #d5d1df;
      font-size: 0.82rem;
      font-weight: 400;
    }


    .contact-item:hover strong {
      color: #a78bfa;
    }

    .contact-icon img {
       width: 24px;
       height: 24px;
       object-fit: contain;
       display: block;
    }

    /* ===============================
       FORM
       =============================== */

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 25px;

      padding: 35px;

      background: rgba(5, 3, 13, 0.65);

      border: 1px solid rgba(139, 92, 246, 0.2);

      border-radius: 20px;

      backdrop-filter: blur(10px);
    }


    .form-row {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 20px;
    }


    .form-group {
      display: flex;
      flex-direction: column;
      gap: 9px;
    }


    .form-group label {
      color: #ffffff;
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.05em;
    }


    .form-input {
      width: 100%;
      box-sizing: border-box;

      padding: 14px 16px;

      background: rgba(255, 255, 255, 0.03);

      border: 1px solid rgba(255, 255, 255, 0.1);

      border-radius: 10px;

      color: #ffffff;

      font-size: 0.85rem;
      font-family: inherit;

      transition:
        border-color 0.3s ease,
        background 0.3s ease,
        box-shadow 0.3s ease;
    }


    .form-input::placeholder {
      color: #666174;
    }


    .form-input:focus {
      outline: none;

      border-color: #8b5cf6;

      background: rgba(139, 92, 246, 0.04);

      box-shadow:
        0 0 0 3px rgba(139, 92, 246, 0.08);
    }


    textarea.form-input {
      resize: vertical;
      min-height: 160px;
    }


    /* ===============================
       ERROR
       =============================== */

    .error {
      color: #f87171;
      font-size: 0.7rem;
    }


    /* ===============================
       BUTTON
       =============================== */

    .submit-btn {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 15px 20px;

      background: #8b5cf6;

      border: none;
      border-radius: 10px;

      color: #ffffff;

      font-size: 0.82rem;
      font-weight: 600;

      cursor: pointer;

      transition:
        transform 0.3s ease,
        background 0.3s ease,
        box-shadow 0.3s ease;
    }


    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);

      background: #7c3aed;

      box-shadow:
        0 12px 30px rgba(139, 92, 246, 0.25);
    }


    .submit-btn:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }


    .arrow {
      font-size: 1.1rem;
    }


    /* ===============================
       MESSAGE
       =============================== */

    .submit-message {
      margin: 0;
      padding: 14px;

      border-radius: 10px;

      text-align: center;

      font-size: 0.78rem;
    }


    .submit-message.success {
      background: rgba(76, 175, 80, 0.08);

      color: #6ee7b7;

      border: 1px solid rgba(76, 175, 80, 0.2);
    }


    .submit-message:not(.success) {
      background: rgba(244, 67, 54, 0.08);

      color: #fca5a5;

      border: 1px solid rgba(244, 67, 54, 0.2);
    }


    /* ===============================
       TABLET
       =============================== */

    @media (min-width: 601px) and (max-width: 900px) {

      .contact {
        padding: 120px 6% 90px;
      }


      .contact-header {
        margin-bottom: 70px;
      }


      .contact-header h1 {
        font-size: clamp(3.5rem, 8vw, 6rem);
      }


      .contact-content {
        grid-template-columns: 1fr;
        gap: 55px;
      }


      .contact-info > p {
        max-width: 700px;
      }


      .contact-details {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 25px;
      }


      .contact-form {
        padding: 30px;
      }

    }


    /* ===============================
       MOBILE
       =============================== */

    @media (max-width: 600px) {

      .contact {
        padding: 110px 6% 70px;
      }


      .contact-header {
        margin-bottom: 60px;
      }


      .label {
        margin-bottom: 18px;
        font-size: 0.65rem;
      }


      .contact-header h1 {
        font-size: clamp(2.8rem, 12vw, 4rem);
        line-height: 0.95;
        margin-bottom: 22px;
      }


      .subtitle {
        font-size: 0.82rem;
        line-height: 1.7;
      }


      .contact-content {
        grid-template-columns: 1fr;
        gap: 50px;
      }


      .contact-info h2 {
        font-size: 1.7rem;
      }


      .contact-info > p {
        font-size: 0.82rem;
        line-height: 1.7;
        margin-bottom: 30px;
      }


      .contact-details {
        gap: 15px;
      }


      .contact-icon {
        width: 38px;
        height: 38px;
      }


      .contact-icon svg {
        width: 19px;
        height: 19px;
      }


      .contact-item strong {
        font-size: 0.75rem;
      }


      .contact-form {
        padding: 22px;
        gap: 20px;
        border-radius: 16px;
      }


      .form-row {
        grid-template-columns: 1fr;
        gap: 20px;
      }


      .form-input {
        padding: 13px 14px;
        font-size: 0.8rem;
      }


      textarea.form-input {
        min-height: 140px;
      }


      .submit-btn {
        padding: 14px 18px;
      }

    }

  `]
})


export class ContactComponent {

  contactForm: FormGroup;

  isSubmitting = signal(false);

  submitMessage = signal('');

  submitSuccess = signal(false);


  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({

      name: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      subject: [
        '',
        Validators.required
      ],

      message: [
        '',
        Validators.required
      ]

    });

  }


  async onSubmit() {

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;

    }


    this.isSubmitting.set(true);

    this.submitMessage.set('');

    this.submitSuccess.set(false);


    try {

      const response = await fetch(
        'https://formspree.io/f/mqpkgwzk',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },

          body: JSON.stringify(
            this.contactForm.value
          )
        }
      );


      if (response.ok) {

        this.submitMessage.set(
          "Thank you! Your message has been sent. I'll get back to you soon."
        );

        this.submitSuccess.set(true);

        this.contactForm.reset();

      } else {

        this.submitMessage.set(
          'Something went wrong. Please try again.'
        );

        this.submitSuccess.set(false);

      }

    } catch (error) {

      this.submitMessage.set(
        'Unable to send your message. Please try again later.'
      );

      this.submitSuccess.set(false);

    } finally {

      this.isSubmitting.set(false);

    }

  }

}