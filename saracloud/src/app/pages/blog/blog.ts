import { Component } from '@angular/core';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  content: string[];
  hashtags: string[];
  images: string[];
  expanded?: boolean;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class BlogComponent {

  /* =========================================
     BLOG POSTS
  ========================================= */

  blogPosts: BlogPost[] = [

    {
      id: 'sca-summit-2026',

      title: 'She Code Africa Summit 2026',

      category: 'Decade of Impact',

      date: 'September 19, 2026',

      expanded: false,

      content: [

        'Attending the She Code Africa Summit 2026 was such a beautiful experience for me. After being part of the She Code Africa journey, being present at the summit and seeing the community come together in person made the experience feel even more special.',

        'One of the highlights of the day was meeting people I had interacted with throughout my learning journey. Some were people I had only known through emails, messages, virtual sessions, and online conversations, so finally seeing them in person was a moment I truly appreciated.',

        'I was especially happy to finally meet Mary Mbaoma, who was my tutor during the She Code Africa Academy DevOps Cohort 3. She played an important role during my learning journey, so meeting her in person was definitely one of the moments I will remember from the summit.',

        'I also got to meet Oreoluwa Adetula in person. Throughout the She Code Africa program, she was always there to check in, send emails, ask questions, and give us important instructions. Meeting someone I had known through those interactions in person made the moment even more meaningful.',

        'Another special part of the summit was being with my tech partner, Olamide Folorunso. We shared so many moments during the event, and having someone familiar around made the experience even more enjoyable.',

        'And one little detail about the day that I am especially proud of — I made the dress I wore to the summit myself. From sewing it to finally wearing it to an event that meant so much to me, it made the day feel even more personal. It was really nice to be there, enjoy the event, meet amazing people, take pictures, and also know that I had created the outfit I was wearing.',

        'The summit also gave me the opportunity to reconnect with people from my cohort and meet other amazing women who are building their own paths in technology. It was beautiful hearing different stories, learning about different experiences, and seeing people contribute to the technology community in their own ways.',

        'There were also moments when I simply stopped to take everything in. Looking around and seeing women learning, building, connecting, sharing ideas, and celebrating one another reminded me of why communities like She Code Africa are important.',

        'For me, the summit was not just about attending an event. It was also a moment to reflect on my own journey. She Code Africa was my first real step into tech, and being at the summit after everything I have learned since then made me appreciate how much can happen when you decide to start.',

        'My journey has taken me from learning Linux and DevOps to exploring cloud engineering and software development. I am still learning and still figuring out where this journey will take me, but moments like this remind me to appreciate how far I have come.',

        'The summit was filled with conversations, laughter, pictures, introductions, learning, and beautiful memories. I met people I had wanted to meet, reconnected with familiar faces, and made new memories with people who are now part of my story.',

        'I left the event grateful for the experience and for everyone who played a part in making the day memorable.',

        'Some moments are worth documenting because, years from now, I want to be able to look back at these pictures and remember exactly how it felt to be there.',

        'This is one of those moments I want to keep.'

      ],

      hashtags: [
        '#SCASUMMIT26',
        '#SheCodeAfrica',
        '#WomenInTech',
        '#TechCommunity',
        '#Memories'
      ],

      /* =========================================
         SUMMIT PHOTOS
      ========================================= */

      images: [
        '/images/summitimg.png',
        '/images/summitimg1.png',
        '/images/summitimg2.png',
        '/images/summitimg3.png',
        '/images/summitimg10.png',
        '/images/summitimg11.png',
        '/images/summitimg12.png',
        '/images/summitimg5.png',
        '/images/summitimg6.png',
        '/images/summitimg8.png',
        '/images/summitimg13.png',
        '/images/summitimg7.png'
      ]

    }

  ];


  /* =========================================
     IMAGE LIGHTBOX
  ========================================= */

  selectedImage: string | null = null;

  selectedPost: BlogPost | null = null;

  selectedImageIndex = 0;


  /* =========================================
     EXPAND / COLLAPSE STORY
  ========================================= */

  toggleExpanded(post: BlogPost): void {

    post.expanded = !post.expanded;

  }


  /* =========================================
     OPEN IMAGE
  ========================================= */

  openImage(
    post: BlogPost,
    index: number
  ): void {

    this.selectedPost = post;

    this.selectedImageIndex = index;

    this.selectedImage = post.images[index];

    document.body.style.overflow = 'hidden';

  }


  /* =========================================
     CLOSE IMAGE
  ========================================= */

  closeImage(): void {

    this.selectedImage = null;

    this.selectedPost = null;

    this.selectedImageIndex = 0;

    document.body.style.overflow = '';

  }


  /* =========================================
     NEXT IMAGE
  ========================================= */

  nextImage(): void {

    if (!this.selectedPost) {
      return;
    }

    const images = this.selectedPost.images;

    if (images.length === 0) {
      return;
    }

    this.selectedImageIndex =
      (this.selectedImageIndex + 1) % images.length;

    this.selectedImage =
      images[this.selectedImageIndex];

  }


  /* =========================================
     PREVIOUS IMAGE
  ========================================= */

  previousImage(): void {

    if (!this.selectedPost) {
      return;
    }

    const images = this.selectedPost.images;

    if (images.length === 0) {
      return;
    }

    this.selectedImageIndex =
      (
        this.selectedImageIndex -
        1 +
        images.length
      ) % images.length;

    this.selectedImage =
      images[this.selectedImageIndex];

  }

}