import { faGithub, faLinkedinIn, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faServer, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export const Introduction = {
	name: 'M. Angel Jacquel',
	email: 'ajacquel@devight-laboratory.ovh',
	website: 'bts.nikkidevil.ovh',
	social_icons: [
		{
			link: 'https://github.com/Nikki-Devil',
			label: 'Github',
			icon: faGithub,
		},
		{
			link: 'https://fr.linkedin.com/in/angel-jacquel',
			label: 'LinkedIn',
			icon: faLinkedinIn,
		},
		{
			link: 'https://cv.devight-laboratory.ovh',
			label: 'Devight Laboratory',
			icon: faChrome,
		},
		{
			link: 'https://cv.8e-couche.ovh',
			label: 'Projet 8e Couche',
			icon: faServer,
		},
		{
			link: 'https://bts.nikkidevil.ovh',
			label: 'PortFolio BTS SIO SISR',
			icon: faGraduationCap,
		},
	]
}

export const WhatsNewAboutExperienceEducationSkills = [
  {
    title: "Actualité",
		details: [
			{
				name: "2022 naissance de la 8ème couche",
				web_url: 'https://cv.8e-couche.ovh',
				detail: "Le serveur de la 8ème couche a été mis en place pour entreposer mon portfolio, partager des ressources avec ma classe et mes amis" + 
						" et pour me servir d'hébergeur de projets.",
				reference_links: [
					{
							link:"https://cv.8e-couche.ovh",
                                                        label: '8e-couche',
							logo: faChrome
					},
				]
			},
			{
				name: "Qui suis-je ?",
				web_url: "https://cv.devight-laboratory.ovh",
				detail: "Je m'appel Angel, je suis Étudiant Technicien Réseaux en France. J'ai pour objectif d'entrer en alternance à l'ESGI puis d'être" +
						" ingénieur en réseaux. Je suis actuellement en alternance dans l'entreprise de monture de lunette, KNCO, et leader" +
						" à Bioburger Batignolles."
			}

		]
	},
	{
		title: 'Examen BTS',
		details: [
			{
				name: "E4 - 1 - Clé de support",
				web_url: 'https://dw.6e-couche.ovh/Support.pdf',
				reference_links: [
				]
			},
			{
				name: "E4 - 2 - Mise en place de poste employé",
				web_url: 'https://dw.6e-couche.ovh/Poste.pdf',
				reference_links: [
				]
			},
			{
				name: "E4 - 3 - Mise en place d'un PfSense",
				web_url: 'https://dw.6e-couche.ovh/PfSense.pdf',
				reference_links: [
				]
			},
			{
				name: "E4 - 4 - Serveur Debian SFTP",
				web_url: 'https://dw.6e-couche.ovh/DebSFTP.pdf',
				reference_links: [
				]
			},
                        {
                                name: "E4 - 5 - Installation d'un WikiJS",
                                web_url: 'https://dw.6e-couche.ovh/WikiJS.pdf',
                                reference_links: [
                                ]
                        },
                        {
                                name: "Tableau de synthèse des compétences",
                                web_url: 'https://dw.6e-couche.ovh/synth_comp.pdf',
                                reference_links: [
				]
                        },
			{
				name: "Veille technologique - WiFi 7",
				web_url: 'https://dw.6e-couche.ovh/Wifi7.pdf',
				reference_links: [
				]
			},
                        {
                                name: "Référenciel BTS SIO",
                                web_url: 'https://dw.6e-couche.ovh/ref_bts_sio_2022-24.pdf',
                                reference_links: [
					{
							link:"https://pedagogie.ac-reunion.fr/fileadmin/ANNEXES-ACADEMIQUES/03-PEDAGOGIE/02-COLLEGE/langues-vivantes/anglais/images_Nawaz/BTS_SIO/REFERENTIEL_BTS_SIO-_RENOVATION_SESSION_2022-SIGNETS.pdf",
							label: 'Site officiel ac-reunion.fr',
							logo: faGraduationCap
					},
                                        {
                                                        link:"https://github.com/E5-MMGE/E4-Nikki.git",
                                                        label: 'Github des documents du PorteFolio',
                                                        logo: faGithub
                                        },
                                ]
                        },
			{
				name: "E5 - 1 - Tailscale ",
				web_url: 'https://dw.6e-couche.ovh/E5-Tailscale.pdf',
				reference_links: [
				]
			},
                        {
                                name: "E5 - 2 - Pare-Feu ",
                                web_url: 'https://dw.6e-couche.ovh/E5-Pare_Feu.pdf',
                                reference_links: [
                                        {
                                                        link:"https://github.com/E5-MMGE/Documentation-Light-Snoop-E5",
                                                        label: 'Documentation Light-Snoop',
                                                        logo: faGithub
                                        },

                                ]
                        },
		]
	},
	{
		title: 'À propos',
		details: [
			{
					major: "Bientôt en 3ème année à l'ESGI en alternance, J'ai mis en place le serveur du Devight Laboratory ainsi que celui de la 8ème couche. " + 
							"Je suis un passioné d'informatique, d'astrophysique et un grand joueur de Minecraft."
			}
		]
	},
	{
		title: "Experiences",
		details: [
			{
				name: "KNCO, lunetier français.",
				web_url: 'https://knco.fr/',
				major: "Technicien informatique - Alternance",
				date: 'Oct 2022 - Août 2024',
				detail: null,
			},
			{
				name: "Bioburger, chaine de burger bio.",
				web_url: 'https://www.bioburger.fr/',
				major: "Leader",
				date: 'Aout 2022 - Présent',
				detail: null,
			},
			{
				name: "Etablissement Sainte Geneviève Courbevoie.",
				web_url: 'https://stgsp-courbevoie.fr/',
				major: "Techicien informatique",
				date: 'Sep 2021 - Feb 2022',
				detail: null,
			}
		]
	},
  {
    title: "Ecoles",
		details: [
                        {
                                name: "ESGI, Paris",
                                web_url: 'https://www.esgi.fr/',
                                major: "Systèmes, Réseaux et Cloud Computing - 3ème année",
                                date: '2024 - Futur',
                                detail: null,
                        },
			{
				name: "Fenelon Sup, Paris",
				web_url: 'https://www.fenelonsup.org/',
				major: "BTS SIO SISR",
				date: '2021 - 2024',
				detail: null,
			},
			{
				name: "Lycée Saint Joseph, Argenteuil",
				web_url: 'http://www.stjosephargenteuil.fr/',
				major: "Bac Général, équivalent de l'ancien S",
				date: '2019 - 2021',
				detail: null,
			}
		]
  },
  {
    title: "Skills, Technologies & Tools",
    skills: true
  }  
]

export const Skills = [
	'devicon-python-plain-wordmark colored',
	'devicon-windows8-original colored',
	'devicon-atom-plain-wordmark colored',
	'devicon-linux-plain',
	'devicon-debian-plain-wordmark colored',
	'devicon-ubuntu-plain-wordmark colored',
	'devicon-git-plain-wordmark colored',
	'devicon-github-original-wordmark',
	'devicon-android-plain-wordmark colored',
	'devicon-jira-plain colored',
	'devicon-markdown-original',
	'https://devicon.dev/',
]
