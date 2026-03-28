#set page(paper: "a4", margin: (x: 2cm, y: 2cm))

#let chiline() = {
  v(-2pt)
  line(length: 100%, stroke: 0.2pt)
  v(-2pt)
}

#let contactInfo = (
  (
    label: "Email",
    link: "mailto:me@pierolescano.com",
    display: "me@pierolescano.com",
  ),
  (
    label: "Website",
    link: "https://pierolescano.com",
    display: "pierolescano.com",
  ),
  (
    label: "GitHub",
    link: "https://github.com/piero-vic",
    display: "github.com/piero-vic",
  ),
  (
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/piero-lescano",
    display: "linkedin.com/in/piero-lescano",
  ),
)

#let contacts(infos) = {
  let pairs = (
    (infos.at(0), infos.at(2)),
    (infos.at(1), infos.at(3)),
  )
  let formatted = pairs
    .map(row => {
      row
        .map(info => {
          text(weight: "semibold")[#{ info.label }: ]
          link(info.link)[#{ info.display }]
        })
        .join(h(1fr))
    })
    .join("\n")
  text[#formatted]
}

#text(size: 24pt)[= Piero Lescano]

#contacts(contactInfo)

== Skills
#chiline()

- *Languages & Frameworks*: Go, TypeScript, React, Angular, Node.js, Astro
- *Databases*: MySQL, PostgreSQL, MongoDB
- *Development Tools*: Git, Linux, Docker, Bash

== Experience
#chiline()

*Rhinolabs Agency* #h(1fr) August 2025 · Present \
_Software Engineer Level 2_ #h(1fr) _Lima, Peru (Remote)_

- Developed and maintained backend applications using Node.js and MongoDB, ensuring high performance and reliability.
- Worked within an Agile Scrum environment, participating in sprints, daily standups, and retrospectives.
- Collaborated with cross-functional teams to design and implement scalable and robust RESTful APIs.
- Conducted code reviews to maintain high code quality and enforce best practices.

*Whiz, a 10Pearls Company* #h(1fr) September 2022 · July 2024 \
_Full Stack Developer_ #h(1fr) _Lima, Peru (Remote)_

- Developed marketing websites using React, Angular, and Gatsby for dynamic user experiences.
- Integrated sites with headless CMS platforms for flexible content management.
- Built custom CMS extensions tailored to clients’ specific needs.
- Connected external services via backend technologies including Java, Spring Boot, and Node.js.

== Education
#chiline()

*Microverse* #h(1fr) September 2021 · June 2022 \
_Full Stack Web Development Program_ #h(1fr) _Remote_

- Developed projects using Ruby on Rails, JavaScript, and React to strengthen web development expertise.
- Collaborated with international peers to enhance communication and teamwork skills.
- Mentored fellow students in debugging, problem-solving, and programming best practices.

== Projects
#chiline()

*go-linkding* #h(1fr) #link("https://github.com/piero-vic/go-linkding")[_GitHub_] · #link("https://pkg.go.dev/github.com/piero-vic/go-linkding")[_Docs_] \
Developed a Go client package to interact with #link("https://github.com/sissbruecker/linkding")[Linkding], a self-hosted bookmark manager.

*libretranslate* #h(1fr) #link("https://github.com/piero-vic/libretranslate")[_GitHub_] · #link("https://pkg.go.dev/github.com/piero-vic/libretranslate")[_Docs_] \
Developed a Go client package to interact with #link("https://github.com/LibreTranslate/LibreTranslate")[LibreTranslate], a free and open source machine translation API.

*battery-notify* #h(1fr) #link("https://github.com/piero-vic/battery-notify")[_GitHub_]\
Battery notifier daemon for Linux written in Go. Monitors battery status via UPower and sends notifications when charging, low, or full.

*volume-notify* #h(1fr) #link("https://github.com/piero-vic/volume-notify")[_GitHub_]\
Lightweight volume notifier daemon for PulseAudio written in Go.
