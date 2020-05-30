import React from 'react'

const Home = () => (
    <div style={styles.container}>
        <img 
            style={styles.imageCover}
            src="https://static.cdn-cdpl.com/source/b8e29e8f0b15aab3473fed5df06c9186/program-codepolitan-developer-school.jpg"
            alt="belajarcoding"
        />
        <div style={styles.blockText}>
            {/* <h1>Belajar Coding Sekarang</h1>
            <h4>
                Lebih dari 2.000 modul belajar pemrograman dalam beragam format yang bisa kamu pelajari.
            </h4> */}
        </div>
    </div>
)

const styles = {
    container: {
        position: 'relative',
        textAlign: 'center',
    },
    imageCover: {
        width: '100%'
    },
    blockText: {
        width: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    }
}

export default Home