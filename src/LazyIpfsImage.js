import './LazyIpfsImage.css'
import './Spinner.css'
import { LazyImage } from 'react-lazy-images'

import React, { useEffect, useState, useReducer } from 'react'
import { NFTStorage } from 'nft.storage'
import { defaultReducer } from './defaultReducer'

const LazyIpfsImage = (props) => {

    const { endpoint, token, ipfspath, setIpfsUri } = props

    if (!endpoint || !token) {
        throw new Error("Please pass nft.storage endpoint and token to LazyIpfsImage component.")
    }

    const ipfsPrefix = ipfspath ? ipfspath : "https://ipfs.io/ipfs "

    const [state, dispatch] = useReducer(defaultReducer,
        {
            loading: false,
            error: false,
            uri: null,
            message: null
        })

    const [file, setFile] = useState()
    const [ipfsUri, setIpfs] = useState()

    const uploadArtwork = async (event) => {
        event.preventDefault()

        const doFetch = async (req) => {
            fetch(req)
                .then(res => {
                    if (!res.ok) {
                        res.text().then(text => {
                            dispatch({ type: "ERROR", message: text })
                            return null
                        })
                    }
                    return res.blob()
                })
                .then(imgBlob => {
                    if (imgBlob) {
                        const uri = URL.createObjectURL(imgBlob)
                        dispatch({ type: "SUCCESS", message: ipfsUri, payload: uri })
                    }
                })
        }

        try {
            if (!file) {
                alert("Please choose file first")
                return
            }
            dispatch({ type: "PROCESSING", message: "Uploading to IPFS, please wait ..." })

            const storage = new NFTStorage({ endpoint, token })
            const cid = await storage.storeBlob(new Blob([file]))
            const status = await storage.status(cid)

            // TODO: for testing only
            // const cid = "bafkreif7tz3idqj2psg7mft2oz7hgjcuzhi4ivad5zlczw2n76j636hr3i"
            // console.log({ cid })
            // const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
            // await sleep (2*1000)

            setFile(null)

            const ipfsUri = `${ipfsPrefix}/${cid}`
            setIpfs(ipfsUri)
            
            if (setIpfsUri) {
                console.log("SET URI")
                setIpfsUri(ipfsUri) // parent call back
            } else {
                console.log("NOT SET")
            }

            dispatch({ type: "INFO", message: `Upload success at ${ipfsUri}` })
            doFetch(ipfsUri)

        } catch (err) {
            console.log(err)
            dispatch({ type: "ERROR", message: err.message })
        }
    }

    const onFileChange = async (event) => {
        setFile(event.target.files[0])
    }

    return (
        <div className="upload__form">
            <div className="upload__frame">
                {state.uri &&
                    <LazyImage
                        className="upload__artwork"
                        src={state.uri}
                        alt="Artwork"
                        debounceDurationMs={400}
                        placeholder={({ imageProps, ref }) =>
                        (
                            // ref is for the component's own reference
                            <>
                                {!state.loading &&
                                    <div className="upload__placeholder" ref={ref}>
                                        <div className="loader" />
                                        <span>Please be patient, it could take a few minutes</span>
                                    </div>
                                }
                            </>
                        )}
                        // eslint-disable-next-line
                        actual={({ imageProps }) => <img {...imageProps} />}
                    />
                }

                {state.loading &&
                    <div className="upload__placeholder">
                        <div className="loader" />
                        <span>Please be patient, it could take a few minutes</span>
                    </div>
                }

                {(!state.uri && !state.loading) &&
                    <div className="upload__placeholder">
                        <span className="upload__prompt">Please upload no less than [3000x2000]</span>
                    </div>
                }
            </div>
            <label className="btn upload__btn btn-bg rounded">
                <input id="file_input" type="file" onChange={(e) => onFileChange(e)} />
                1. Choose File
            </label>
            <div className="btn upload__btn btn-bg rounded" onClick={e => uploadArtwork(e)}>2. Upload Artwork</div>
            {state.message && (
                <div className="upload_message">
                    {!state.error ? <span>✅</span> : <span>❌</span>}
                    {state.message}
                </div>
            )}
        </div>

    )
};

export default LazyIpfsImage;