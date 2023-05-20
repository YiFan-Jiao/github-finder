import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
/* npm i axios */

function User() {
    const [userImg,setUserImg] = useState()
    const [uName,setUNameg] = useState()
    const [repos,setRepos] = useState()
    const [follws,setFollws] = useState()
    const [folwing,setFolwing] = useState()
    const [gitLink,setGitLink] = useState()
    const [reposLists,setReposLists] = useState()

    const {username} = useParams();
    const githubToken = process.env.REACT_APP_GITHUB_TOKEN;
    const options = {headers: { Authorization: `Bearer ${githubToken}`}};

    useEffect(()=>{
        
        const getJson = async () => {
        try {
            const {data} = await Axios.get(`https://api.github.com/users/${username}`/* ,options */);
            //console.log(data)
            setUserImg(data.avatar_url);
            setUNameg(data.name)
            setRepos(data.public_repos)
            setFollws(data.followers)
            setFolwing(data.following)
            setGitLink(data.html_url)
        } catch(error) {
            //console.log('not found')
        }

        try {
            const {data} = await Axios.get(`https://api.github.com/users/${username}/repos`/* ,options */);
            //console.log(data)
            setReposLists(data)
        } catch(error) {
            //console.log('not found')
        }
    }
     getJson();
    },[])

  return (
    <main>
        <div className='container grid big-box'>
            <div className='user-info grid'>
                <img className='user-img' src={userImg}></img>
                <div className='user-name'>{uName}</div>
                <div className='three-info grid'>
                    <div>
                        <div className='repos'>{repos}</div>
                        <div className='info-name'>REPOSITORIES</div>
                    </div>
                    <div>
                        <div className='repos'>{follws}</div>
                        <div className='info-name'>FOLLOWERS</div>
                    </div>
                    <div>
                        <div className='repos'>{folwing}</div>
                        <div className='info-name'>FOLLOWING</div>
                    </div>
                </div>
                <div className='toGit'>
                    <a href={gitLink} target='_block'>GO TO GITHUB</a>
                </div>
            </div>
        </div>
        <div className='container grid repostiories'>
            <h2>Their repostiories</h2>
            { reposLists && reposLists.map(item => (
                <div className='reops-info grid' key={item.id}>
                    <a href={item.html_url} target='_block'> 
                        <div>
                            <div className='reops-name'>
                                {item.name}
                            </div>
                            <div className='reops-detail'>
                            {item.description}
                            </div>
                        </div>
                    </a>
                    <div className='reops-date'>
                        Updated at {item.updated_at}
                    </div>
                </div>
            ))}
        </div>
    </main>
  )
}

export default User