import { Component } from '@angular/core';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    logo: string;
  }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section class="skills">
      <div class="container">

        <p class="skills-label">SKILLS & EXPERTISE</p>

        <h1>
          Tech <span>Skills</span>
        </h1>

        <div class="skills-grid">

          @for (category of skillCategories; track category.name) {

            <div class="skill-category">

              <h2>{{ category.name }}</h2>

              <div class="skill-list">

                @for (skill of category.skills; track skill.name) {

                  <div class="skill-item">

                    <img
                      [src]="skill.logo"
                      [alt]="skill.name"
                    >

                    <span>{{ skill.name }}</span>

                  </div>

                }

              </div>

            </div>

          }

        </div>

      </div>


      <!-- SOFT SKILLS -->
<div class="soft-skills">

  <h1>Soft <span>Skills</span></h1>

  <div class="soft-skills-grid">

    <div class="soft-skill-item">
      <span>Team Collaboration</span>
    </div>

    <div class="soft-skill-item">
      <span>Leadership</span>
    </div>

    <div class="soft-skill-item">
      <span>Communication</span>
    </div>

    <div class="soft-skill-item">
      <span>Problem Solving</span>
    </div>

    <div class="soft-skill-item">
      <span>Adaptability</span>
    </div>

    <div class="soft-skill-item">
      <span>Presentation</span>
    </div>

  </div>

</div>

    </section>

    
  `,

  styles: [`

    /* =====================================================
       SKILLS
       ===================================================== */

    .skills {
      padding: 100px 0;
      color: #ffffff;
    }

    .container {
      max-width: 1000px;
      margin: 20px auto;
    }


    /* =====================================================
       HEADER
       ===================================================== */

    .skills-label {
      margin: 0 0 15px;

      color: #ffffff;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 4px;
      text-transform: uppercase;
    }

    h1 {
      margin: 0 0 60px;

      font-family: "Space Grotesk", sans-serif;
      font-size: clamp(40px, 5vw, 60px);
      line-height: 1;
      letter-spacing: -3px;
      color: #ffffff;
    }

    h1 span {
      color: #a78bfa;
    }


    /* =====================================================
       GRID
       ===================================================== */

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 100px;
      row-gap: 55px;
    }


    /* =====================================================
       CATEGORY
       ===================================================== */

    .skill-category {
      padding: 0;
      background: none;
      border: none;
    }

    .skill-category h2 {
      margin: 0 0 25px;

      color: #a78bfa;
      font-family: "Space Grotesk", sans-serif;
      font-size: 17px;
      font-weight: 600;
    }


    /* =====================================================
       SKILLS
       ===================================================== */

    .skill-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px 30px;
    }

    .skill-item {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .skill-item img {
      width: 50px;
      height: 50px;
      object-fit: contain;
      flex-shrink: 0;
    }

    .skill-item span {
      color: #ffffff;
      font-family: "Space Grotesk", sans-serif;
      font-size: 14px;
      font-weight: 500;
    }


    /* =====================================================
       TABLET
       ===================================================== */

    @media (max-width: 900px) {

      .skills {
        padding: 80px 6%;
      }

      .skills-grid {
        column-gap: 60px;
        row-gap: 45px;
      }

      .skill-list {
        gap: 18px 20px;
      }

    }


    /* =====================================================
       MOBILE
       ===================================================== */

    @media (max-width: 600px) {

      .skills {
        padding: 65px 6%;
      }

      h1 {
        font-size: 32px;
        letter-spacing: -1.5px;
        margin-bottom: 40px;
      }

      .skills-grid {
        grid-template-columns: 1fr;
        row-gap: 40px;
      }

      .skill-category h2 {
        font-size: 15px;
        margin-bottom: 20px;
      }

      .skill-list {
        grid-template-columns: repeat(2, 1fr);
        gap: 18px 15px;
      }

      .skill-item {
        gap: 9px;
      }

      .skill-item img {
        width: 50px;
        height: 50px;
      }

      .skill-item span {
        font-size: 14px;
      }

    }

    /* =====================================================
   SOFT SKILLS
   ===================================================== */

  .soft-skills h1 {
  font-size: 60px;
  line-height: 0.98;
  margin: 0 0 30px ;
}

.soft-skills {
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 100px;
  max-width: 1000px;
  padding: 0 30px;
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(20px, 3vw, 40px);
}

.soft-skills .skills-label {
  margin: 0 0 30px;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
}


/* =====================================================
   SOFT SKILLS GRID
   ===================================================== */

.soft-skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}


/* =====================================================
   SOFT SKILL ITEM
   ===================================================== */

.soft-skill-item {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 65px;
  padding: 0 20px;

  background: rgba(167, 139, 250, 0.04);

  border-left: 2px solid #a78bfa;

  transition: 
    background 0.3s ease,
    transform 0.3s ease;
}

.soft-skill-item::before {
  content: "✦";

  margin-right: 12px;

  color: #a78bfa;
  font-size: 12px;
}

.soft-skill-item span {
  color: #ffffff;
  font-family: "Space Grotesk", sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
}


/* =====================================================
   HOVER
   ===================================================== */

.soft-skill-item:hover {
  background: rgba(167, 139, 250, 0.09);
  transform: translateX(4px);
}

.soft-skill-item:hover::before {
  color: #c4b5fd;
}


/* =====================================================
   TABLET
   ===================================================== */

@media (max-width: 900px) {

  .soft-skills {
    margin-top: 80px;
    margin-left: 0;
    margin-right: auto;
    padding-left: 0;
    padding-right: 0;
    text-align: left;
  }

  .soft-skills h1 {
    font-size: 40px;
    text-align: left;
    margin-left: 0;
  }

  .soft-skills .skills-label {
    text-align: left;
  }

  .soft-skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .soft-skill-item {
    min-height: 60px;
    padding: 0 17px;
    justify-content: flex-start;
    text-align: left;
  }

}

@media (max-width: 600px) {

  .soft-skills {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    transform: none !important;
    grid-column: 1 / -1 !important;
  }

  .soft-skills h1 {
    text-align: left !important;
    margin-left: 0 !important;
    font-size: 32px !important;
  }

  .soft-skills-grid {
    width: 100% !important;
    margin-left: 0 !important;
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 10px !important;
  }

  .soft-skill-item {
    width: 100% !important;
    box-sizing: border-box;
    margin-left: 0 !important;
  }

}
  `]

})
export class SkillsComponent {

  skillCategories: SkillCategory[] = [

    {
      name: 'Cloud Platform',
      skills: [
        {
          name: 'AWS',
          logo: '/images/Amazon_Web_Services-Logo.wine.png'
        },
       
      ]
    },

    {
      name: 'DevOps & Tools',
      skills: [
        {
          name: 'Kubernetes',
          logo: '/images/Kubernetes-Logo.wine.svg'
        },
        {
          name: 'Docker',
          logo: '/images/Docker.svg'
        },
        {
          name: 'Terraform',
          logo: '/images/Terraform.png'
        },
        {
          name: 'Git & GitHub CI/CD',
          logo: '/images/GitHub-logo.png'
        }

      ]
    },

    {
      name: 'Scripting',
      skills: [
        {
          name: 'Bash',
          logo: '/images/Bashing-logo.png'
        },
        {
          name: 'Python',
          logo: '/images/Python-logo.png'
        },
        {
          name: 'PowerShell',
          logo: '/images/PowerShell-logo.png'
        },
        {
          name: 'JavaScript',
          logo: '/images/JavaScript-logo.png'
        }
      ]
    },

    {
      name: 'AI',
      skills: [
        {
          name: 'GitHub Copilot',
          logo: '/images/GitHub-Copilot.png'
        },
        {
          name: 'Claude',
          logo: '/images/Claude-logo.png'
        },
        {
          name: 'Codex',
          logo: '/images/Codex-logo.png'
        },
        {
          name: 'Angular',
          logo: '/images/Angular-logo.png'
        }
      ]
    }

  ];

  

}