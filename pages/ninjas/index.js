import styles from '../../styles/Jobs.module.css'
import Link from 'next/link'

export const getStaticProps = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: {ninjas: data}
    }
}


const Ninja = ({ninjas}) => {
    return ( 
        <div>
            <h1>All ninjas</h1>
            {ninjas.map(ninja =>(
                <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
                    <a className={styles.single}>
                        <h3 className={styles.name}>
                            {ninja.name}
                        </h3>
                    </a>
                </Link>
            ))}
        </div> 
    );
}
 
export default Ninja;