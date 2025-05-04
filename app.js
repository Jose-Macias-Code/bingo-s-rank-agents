document.addEventListener('DOMContentLoaded', () => {
  const config = {
      itachi: {
          themeClass: 'theme-itachi',
          logo: 'assets/Itachi/logo-uchiha.png',
          logoAlt: 'Símbolo Clan Uchiha',
          avatar: 'assets/Itachi/itachi.png',
          avatarAlt: 'Retrato de Itachi Uchiha',
          name: 'Itachi Uchiha',
          class: 'Nivel: S-Rank — Genjutsu Especialista',
          affiliation: 'Afiliación: Akatsuki (EX-ANBU de Konoha)',
          status: 'Estado: Vivo — Nivel de amenaza extremo',
          description: 'Ex-ANBU de élite de Konoha, actualmente miembro de Akatsuki. Dominó el Mangekyō Sharingan y es reconocido por su genjutsu letal. Responsable de la masacre del Clan Uchiha. Clasificado como objetivo S-Rank de alta amenaza.',
          abilities: [
              { icon: 'assets/Itachi/tsukuyomi.png', alt: 'Tsukuyomi', label: 'Tsukuyomi' },
              { icon: 'assets/Itachi/amaterasu.png', alt: 'Amaterasu', label: 'Amaterasu' },
              { icon: 'assets/Itachi/susano’o.png', alt: 'Susano’o', label: 'Susano’o' },
              { icon: 'assets/Itachi/izanami.png', alt: 'Izanami', label: 'Izanami' }
          ]
      },
      jiraiya: {
          themeClass: 'theme-jiraiya',
          logo: 'assets/Jiraiya/logo-konoha.png',
          logoAlt: 'Símbolo de Jiraiya',
          avatar: 'assets/Jiraiya/jiraiya.png',
          avatarAlt: 'Retrato de Jiraiya',
          name: 'Jiraiya',
          class: 'Nivel: S-Rank — Sabio Sapo',
          affiliation: 'Afiliación: Sannin de Konoha',
          status: 'Estado: Vivo — Nivel de amenaza extremo',
          description: 'Legendario Sannin de Konoha, maestro de Naruto Uzumaki y experto en el Modo Sabio. Reconocido por sus jutsus de invocación de sapos y técnicas de fuego. Clasificado como objetivo S-Rank por su fuerza y habilidades únicas.',
          abilities: [
              { icon: 'assets/Jiraiya/rasengan.png', alt: 'Rasengan', label: 'Rasengan' },
              { icon: 'assets/Jiraiya/katon.png', alt: 'Gōkakyū', label: 'Katon: Gōkakyū' },
              { icon: 'assets/Jiraiya/summoning.png', alt: 'Invocación', label: 'Invocación de Sapos' },
              { icon: 'assets/Jiraiya/sage-mode.png', alt: 'Modo Sabio', label: 'Modo Sabio Sapo' }
          ]
      },
      pain: {
        themeClass: 'theme-pain',
        logo: 'assets/Pain/logo-akatsuki.png',
        logoAlt: 'Símbolo de Akatsuki',
        avatar: 'assets/Pain/pain.png',
        avatarAlt: 'Retrato de Pain',
        name: 'Pain (Nagato)',
        class: 'Nivel: S-Rank — Líder de Akatsuki',
        affiliation: 'Afiliación: Aldea Oculta de la Lluvia (Amegakure)',
        status: 'Estado: Vivo — Nivel de amenaza extremo',
        description: 'Pain, nombre clave de Nagato, es el líder de Akatsuki y poseedor del Rinnegan. Controla seis cuerpos a través del Camino Exterior, cada uno especializado en diferentes habilidades, y es responsable de la destrucción de Konoha.',
        abilities: [
          { icon: 'assets/Pain/deva.png', alt: 'Deva Path', label: 'Deva' },
          { icon: 'assets/Pain/asura.png', alt: 'Asura Path', label: 'Asura' },
          { icon: 'assets/Pain/human.png', alt: 'Human Path', label: 'Humano' },
          { icon: 'assets/Pain/animal.png', alt: 'Animal Path', label: 'Animal' }
        ]      
      },    
      minato: {
        themeClass: 'theme-minato',
        logo: 'assets/Minato/logo-konoha.png',
        logoAlt: 'Símbolo de Konoha',
        avatar: 'assets/Minato/minato.png',
        avatarAlt: 'Retrato de Minato Namikaze',
        name: 'Minato Namikaze',
        class: 'Nivel: S-Rank — Relámpago Amarillo',
        affiliation: 'Afiliación: EX-Hokage de Konoha',
        status: 'Estado: Fallecido — Nivel de amenaza: huir a primera vista',
        description: 'Cuarto Hokage de Konoha, famoso por su velocidad y el uso del Hiraishin no Jutsu. Padre de Naruto Uzumaki y héroe de la aldea, es recordado como uno de los ninjas más poderosos de su época.',
        abilities: [
            { icon: 'assets/Minato/hiraishin.png', alt: 'Hiraishin', label: 'Hiraishin' },
            { icon: 'assets/Minato/rasengan.png', alt: 'Rasengan', label: 'Rasengan' },
            { icon: 'assets/Minato/sage-mode.png', alt: 'Modo Sabio', label: 'Modo Sabio Sapo' },
            { icon: 'assets/Minato/seal.png', alt: 'Sello', label: 'Sellos' }
        ]
      }    
  };

  const screen = document.getElementById('agent-screen');
  const carouselItems = document.querySelectorAll('.agent-carousel li');
  const fields = {};

  let currentCharacter = localStorage.getItem('selectedCharacter') || 'itachi';

  document.querySelectorAll('[data-field]').forEach(el => {
      fields[el.getAttribute('data-field')] = el;
  });

  function switchCharacter(charKey, forceAnimation = false) {
      const data = config[charKey];
      if (!data) return;

      if (forceAnimation || charKey !== currentCharacter) {
          screen.classList.add('switching');
      }

      setTimeout(() => {
          Object.values(config).forEach(c => screen.classList.remove(c.themeClass));
          screen.classList.add(data.themeClass);

          const logoImg = fields.logo.querySelector('img');
          logoImg.src = data.logo;
          logoImg.alt = data.logoAlt;

          const avatarImg = fields.avatar.querySelector('img');
          avatarImg.src = data.avatar;
          avatarImg.alt = data.avatarAlt;

          screen.classList.remove('show-image');
          void screen.offsetWidth;
          screen.classList.add('show-image');

          fields.name.innerText = data.name;
          fields.class.innerText = data.class;
          fields.affiliation.innerText = data.affiliation;
          fields.status.innerText = data.status;
          fields.description.innerText = data.description;

          data.abilities.forEach((abilityData, idx) => {
              const key = `ability${idx + 1}`;
              const abilityEl = fields[key];
              const imgEl = abilityEl.querySelector('img');
              imgEl.src = abilityData.icon;
              imgEl.alt = abilityData.alt;
              abilityEl.querySelector('.label').innerText = abilityData.label;
          });

          carouselItems.forEach(li => {
              li.classList.toggle('active', li.getAttribute('data-character') === charKey);
          });

          currentCharacter = charKey;
          localStorage.setItem('selectedCharacter', charKey);

          screen.classList.remove('switching');
      }, 300);
  }

  carouselItems.forEach(li => {
      li.addEventListener('click', () => {
          const charKey = li.getAttribute('data-character');
          if (charKey !== currentCharacter) {
              switchCharacter(charKey);
          }
      });
  });

  switchCharacter(currentCharacter, true);
});
