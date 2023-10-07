import React from 'react'
import styles from './PreviewStyles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import BackError from '../../../error-back.png';
import { BsPlayFill, BsPlus } from 'react-icons/bs';
import { BiDislike, BiLike } from 'react-icons/bi';
import AddIcon from '@mui/icons-material/Add';
import { CgClose, CgChevronDoubleRight } from "react-icons/cg";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useEffect } from 'react';
import { AllowCurrentMovie, formatComanies, formatFullYear, formatGenres, formatTime } from '../../Redux/action';
import Loading from '../../Loading';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
export const Preview = () => {
    const dispatch = useDispatch()
    const similarMovies = useSelector((store) => store.similarMovies)
    const currentMovie = useSelector((store) => store.currentMovie)
    // console.log(currentMovie, similarMovies)
    const [soundReleased, setsoundReleased] = useState(false);
    const [visibleModal, setVisibleModal] = useState(true);
    const [runtime, setRuntime] = useState('0h 00m');
    const [genres, setGenres] = useState([]);
    const [companies, setCompanies] = useState(false);
    const [loadedMain, setLoadedMain] = useState(false);
    const [loadedRest, setLoadedRest] = useState(false);



    useEffect(() => {
        if (currentMovie.runtime) {
            setRuntime(formatTime(currentMovie.runtime));
        }

        if (currentMovie.genres) {
            setGenres(formatGenres(currentMovie.genres));
        }

        if (currentMovie.production_companies) {
            setCompanies(formatComanies(currentMovie.production_companies));
        }
    }, [currentMovie, similarMovies]);


    const onClose = () => {
        document.querySelector('body').style.overflow = 'auto';
        setVisibleModal(false);
        dispatch(AllowCurrentMovie(false))
    }
    return (
        <>
            {visibleModal &&
                <div className={styles.previewMovie}>
                    <div className={styles.previewMovieModal}>
                        <div className={styles.previewMovieHeader}>
                            <div className={styles.previewMovieBackdrop}>
                                {
                                    currentMovie.backdrop_path != null ? (
                                        <>
                                            {loadedMain ? null : (
                                                <div className={styles.onLoad}>
                                                    <Loading
                                                        style={{
                                                            top: '33%'
                                                        }}
                                                    />
                                                </div>
                                            )}
                                            <img
                                                style={loadedMain ? {} : { display: 'none' }}
                                                src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`}
                                                alt={currentMovie.original_title ? currentMovie.original_title : currentMovie.original_name}
                                                onLoad={() => setLoadedMain(true)}
                                            />
                                        </>
                                    ) : (
                                        <img src={BackError} alt={currentMovie.original_title ? currentMovie.original_title : currentMovie.original_name} />
                                    )
                                }
                                <div>
                                    <div className={styles.previewMovieGeneral}>
                                        <div className={styles.previewMovieTitle}>
                                            {
                                                currentMovie.original_title != null ? (
                                                    <>
                                                        {currentMovie.original_title}
                                                    </>
                                                ) : (
                                                    <>
                                                        {currentMovie.original_name}
                                                    </>
                                                )
                                            }
                                        </div>
                                        <div className={styles.previewMovieOptions}>
                                            <Link to={`/watch`} className={styles.previewMovieWatch}>
                                                <div className={styles.previewMovieWhatchButton}>
                                                    <BsPlayFill />
                                                    <span>play</span>
                                                </div>
                                            </Link>
                                            <button className={styles.previewMovieDislike}>
                                                <AddIcon />
                                                <span>Add</span>
                                            </button>
                                            <button className={styles.previewMovieDislike}>
                                                <BiLike />
                                                <span>Like</span>

                                            </button>
                                            <button className={styles.previewMovieDislike}>
                                                <BiDislike />
                                                <span>Dislike</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.previewMovieClose}>
                                        <button onClick={onClose}>
                                            <HighlightOffRoundedIcon />
                                        </button>
                                    </div>
                                    <div className={styles.previewMovieSound}>
                                        <button onClick={() => {
                                            setsoundReleased(!soundReleased);
                                        }}>
                                            {soundReleased ? (
                                                <VolumeUpRoundedIcon />
                                            ) : (
                                                <VolumeOffRoundedIcon />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Big image se neeche wla   */}


                        <div className={styles.previewMovieBody}>
                            <div className={styles.previewMovieBodyContent}>
                                <div className={styles.previewMovieBodyDetails}>
                                    <div className={styles.previewMovieBodyDetailsLeft}>
                                        <div>
                                            <div className={styles.tagsRelevance}>{Math.ceil(currentMovie.vote_average * 10)}% Likes</div>
                                            <div className={styles.tagsYear}>
                                                {
                                                    currentMovie.release_date ? (
                                                        <>
                                                            {formatFullYear(currentMovie.release_date)}
                                                        </>
                                                    ) : (
                                                        <>
                                                            {formatFullYear(currentMovie.first_air_date)}
                                                        </>
                                                    )
                                                }
                                            </div>
                                            <CgChevronDoubleRight />
                                            <div className={styles.tagsDuration}>
                                                {
                                                    currentMovie.runtime ? (
                                                        <> {runtime}</>
                                                    ) : (
                                                        <>
                                                            {currentMovie.number_of_seasons} season{currentMovie.number_of_seasons !== 1 ? 's' : ''}
                                                        </>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <p>
                                            {
                                                currentMovie.overview === '' ? (
                                                    <>
                                                        {currentMovie.original_title ? currentMovie.original_title : currentMovie.original_name} does not have a description
                                                    </>
                                                ) : (<>     {currentMovie.overview} </>
                                                )}
                                        </p>
                                    </div>
                                    <div className={styles.previewMovieBodyDetailsRight}>
                                        <div className={styles.tagsCompanies}>
                                            <span>Productions: </span>
                                            <span>
                                                {
                                                    companies === '' ? (
                                                        <>
                                                            Oops... The title in question does not have a description
                                                        </>
                                                    ) : (
                                                        <>
                                                            {companies}
                                                        </>
                                                    )
                                                }
                                            </span>
                                        </div>
                                        <div className={styles.tagsGenres}>
                                            <span>Genres: </span>
                                            <span>
                                                {genres.join(', ')}
                                            </span>
                                        </div>
                                        <div className={styles.tagsStatus}>
                                            <span>Status: </span>
                                            <span>
                                                {currentMovie.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.previewMovieTrack}>
                                    <Typography bgcolor={'black'} >Similar Movies</Typography>
                                    <div className={styles.previewMovieTrackContent}>
                                        <div>
                                            {similarMovies.map((value, key) => (
                                                <div className={styles.previewMovieTrackCard} key={key}>
                                                    <div className={styles.previewMovieTrackMain}>
                                                        <div className={styles.previewMovieTrackImage}>
                                                            {
                                                                value.backdrop_path != null ? (
                                                                    <>
                                                                        {loadedRest ? null : (
                                                                            <div
                                                                                style={{
                                                                                    width: '100%',
                                                                                    height: '160px'
                                                                                }}
                                                                            >
                                                                                <Loading
                                                                                    style={{
                                                                                        top: '33%'
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                        )}
                                                                        <img
                                                                            style={loadedRest ? {} : { display: 'none' }}
                                                                            src={`https://image.tmdb.org/t/p/original${value.backdrop_path}`}
                                                                            alt={value.original_title ? value.original_title : value.original_name}
                                                                            onLoad={() => setLoadedRest(true)}
                                                                        />
                                                                    </>
                                                                ) : (
                                                                    <img src={BackError} alt={value.original_title ? value.original_title : value.original_name} />
                                                                )
                                                            }
                                                        </div>
                                                        <div className={styles.previewMovieTrackPlayer}>
                                                            <PlayCircleOutlineIcon />
                                                           
                                                        </div>
                                                        <span>{formatFullYear(value.release_date)}</span>
                                                    </div>
                                                    <div className={styles.previewMovieTrackDetails}>
                                                        <div className={styles.previewMovieTrackHeader}>
                                                            <div id="details">
                                                                <div className={styles.tagsRelevance}>{Math.ceil(value.vote_average * 10)}% Likes</div>
                                                                <div className={styles.tagsTitle}>{value.original_title.substring(0, 15) + '...'}</div>
                                                            </div>
                                                            <button className={styles.previewMovieAddList}>
                                                                <AddIcon />
                                                                <span>Add to My List</span>
                                                            </button>
                                                        </div>
                                                        <div className={styles.previewMovieTrackDetailsBody}>
                                                            <p>
                                                                {
                                                                    value.overview === '' ? (
                                                                        <>
                                                                            Oops.. The title in question does not have a description
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            {value.overview}
                                                                        </>
                                                                    )
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
