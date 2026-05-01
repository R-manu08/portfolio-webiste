import React, { useState } from 'react'
import essayImg from '../assets/essay.png.png'

const EssaySection = () => {
  const [expanded, setExpanded] = useState(false)

  const essayContent = `
The future of higher education in India is poised at a transformative crossroads, shaped by rapid technological advancement, evolving industry demands, and ambitious policy reforms. Over the past decade, India has expanded access to higher education significantly, but the focus is now shifting from mere enrollment numbers to quality, innovation, and global competitiveness. With one of the world's largest youth populations, India has both an opportunity and a responsibility to create an education system that equips students not only with academic knowledge but also with critical thinking, adaptability, and employability skills. The implementation of forward-looking policies, especially those emphasizing interdisciplinary learning and flexibility, indicates a move toward a more holistic and student-centered system. This transformation aims to break away from traditional rote learning methods and instead encourage creativity, research, and problem-solving abilities that are essential in the 21st century.

Technology is expected to play a central role in shaping the future landscape of higher education in India. The integration of digital tools, online platforms, artificial intelligence, and data analytics has already begun to redefine how education is delivered and consumed. Virtual classrooms, hybrid learning models, and Massive Open Online Courses (MOOCs) are making education more accessible, especially for students in remote and underserved regions. In the coming years, we can expect personalized learning experiences where AI-driven systems adapt to individual student needs, pace, and learning styles. Additionally, technologies like virtual reality and augmented reality may revolutionize fields such as medicine, engineering, and architecture by offering immersive, hands-on learning experiences. However, this technological shift also brings challenges, including the digital divide, data privacy concerns, and the need for teachers to be trained in using advanced tools effectively. Addressing these issues will be crucial to ensuring that technological progress benefits all sections of society equally.

Another significant aspect of the future of higher education in India is its increasing alignment with industry requirements and global standards. Employers today seek graduates who possess not just theoretical knowledge but also practical skills, creativity, and the ability to work collaboratively. As a result, universities and colleges are gradually incorporating skill-based education, internships, industry collaborations, and experiential learning into their curricula. The emphasis on entrepreneurship and innovation is also growing, with many institutions establishing incubation centers and startup support systems. Furthermore, international collaborations and student exchange programs are expected to expand, enabling Indian students to gain global exposure and compete on an international stage. At the same time, foreign universities may establish campuses in India, fostering healthy competition and raising academic standards. This global integration will not only enhance the quality of education but also contribute to India's aspiration of becoming a global knowledge hub.
`

  return (
    <section id="essay" style={{ padding: '8rem 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Featured Perspective</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>A deep dive into the Future of Education.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'start' }}>
          {/* Essay Image Area */}
          <div className="glass-card" style={{ padding: '0', overflow: 'hidden', borderRadius: '20px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>
            <img src={essayImg} alt="Handwritten Essay" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
          </div>

          {/* Essay Area */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>The Future of Higher Education in India</h3>
            <div style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '2rem' }}>Original Essay • 3 min read</div>
            
            <div style={{ 
              color: 'var(--text-main)', 
              lineHeight: 1.8, 
              fontSize: '1.05rem',
              maxHeight: expanded ? '2000px' : '250px',
              overflow: 'hidden',
              transition: 'max-height 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative'
            }}>
              {essayContent.split('\n\n').map((paragraph, idx) => (
                <p key={idx} style={{ marginBottom: '1.5rem', textAlign: 'justify' }}>
                  {paragraph.trim()}
                </p>
              ))}
              
              {!expanded && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '100px',
                  background: 'linear-gradient(to bottom, transparent, var(--bg-main))',
                  pointerEvents: 'none'
                }} />
              )}
            </div>

            <button 
              onClick={() => setExpanded(!expanded)}
              style={{
                marginTop: '1.5rem',
                background: 'transparent',
                border: '1px solid var(--accent-primary)',
                color: 'var(--accent-primary)',
                padding: '0.8rem 2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                width: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent-primary)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--accent-primary)'
              }}
            >
              {expanded ? 'Read Less ↑' : 'Read Full Essay ↓'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EssaySection
