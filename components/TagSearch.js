import React, { useState, useEffect } from 'react'
import styles from '../styles/TagSearch.module.css'
import DataBase from '../data/index'
import Image from 'next/image'


const Tags = []

function TagSearch() {


    const [tags, setTags] = useState([]);
    const [text, setText] = useState('');


    const addTag = (e) => {
        if (e.keyCode === 32 || e.keyCode === 13) {
            setTags(tags.concat(text))
            setText('')
            console.log(tags)
        }
    }

    const removeTag = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    }


    const clearTags = () => {
        setTags([]);
    }


    return (

        <>
            {/* //  adding tags  */}
            <div className={styles.tagContainer}>
                <div className={styles.tagBox}>
                    {tags.map((tag, index) => (
                        <div key={index} className={styles.tag}>
                            <div className={styles.tagText}>
                                {tag}
                            </div>
                            <div onClick={() => removeTag(index)} className={styles.cancel}>
                                <p style={{ marginTop: 7 }}>x</p>
                            </div>
                        </div>
                    ))}
                    <input onKeyDown={addTag} value={text.trim()} onChange={(e) => setText(e.target.value)} type="text" className={styles.tagInput} placeholder="html , javascript etc" />
                </div>
                <div onClick={() => clearTags()} className={styles.clear}>
                    clear
                </div>

            </div>

            {/* fetching  live search */}
            <div className={styles.resbox}>
                {DataBase.data.map((item, index) => (
                    <div key={index} className={styles.resboxMain}>
                        {item.languages.filter((language) => tags.includes(language.toLowerCase())).map((language, i) => (
                            <div key={i} className={styles.listbox}>
                                <div className={styles.Box1}>
                                    <div className={styles.imageBox}>
                                        <Image alt="image" src={'/' + item.logo} width={100} height={100} />
                                    </div>
                                    <div className={styles.box1textbox}>
                                        <div className={styles.box1_text_first}>
                                            <div className={styles.cname_company}>{item.company}</div>
                                            {item.featured ? (
                                                <div className={styles.cname_f}>FEATURED</div>
                                            ) : null}
                                            {item.new ? (
                                                <div className={styles.cname_n}>NEW!</div>
                                            ) : null}
                                        </div>
                                        <div className={styles.box1_text_position}>
                                            <div className={styles.cname}>{item.position}</div>
                                        </div>
                                        <div className={styles.box1_text_third}>
                                            <div className={styles.cname}>{item.postedAt}</div>
                                            <div className={styles.dot}>.</div>
                                            <div id={styles.cc} className={styles.cname}>{item.contract}</div>
                                            <div className={styles.dot}>.</div>
                                            <div id={styles.cc} className={styles.cname}>{item.location}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.Box2}>
                                    <div className={styles.box2tagbox}>
                                        <div className={styles.box2tagp}>{item.role}</div>
                                        <div className={styles.box2tagp}>{item.level}</div>
                                        {item.languages.map((language, i) => (
                                            <div key={i} className={styles.box2tagp}>
                                                {language}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </>

    )
}

export default TagSearch
