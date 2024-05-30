import React, {useState} from 'react';
import {Card, Tooltip, Typography, Image} from "antd";
import {EditOutlined, DeleteTwoTone } from "@ant-design/icons"
import { useDispatch } from 'react-redux';
import styles from './styles'
import { deleteMovie } from '../../actions/movies';
import { Rate } from 'antd';

const {Meta} = Card;
const {Link, Paragraph, Text} = Typography

function Movie({movie, setSelectedId}){
    const dispatch = useDispatch();
    const [expand, setExpand] = useState(true);

    const user = JSON.parse(localStorage.getItem("profile"));
    const cardActions = [
        <Tooltip
            placement='top'
            title='Edit'
        >

            <EditOutlined onClick={()=>{
                // console.log(user?.result?.id)
                // console.log(movie?.postedBy)
                // console.log(movie.id)
                // debugger;
                setSelectedId(movie.id);
            }}/>
        </Tooltip>,
        <Tooltip
            placement='top'
            title='Delete'
            color='red'
        >
            <DeleteTwoTone twoToneColor="red" onClick={()=> dispatch(deleteMovie(movie.id))}/>
        </Tooltip>
    ];

    return (
        <Card 
            style={styles.card}
            cover={<Image src = {movie.image} style={styles.image}/>}
            actions={
                user?.result?.id === movie?.postedBy ? cardActions : user?.result ? cardActions.slice(0,0) : null
            }>

            <Meta title={movie.name}/>
            <Paragraph
                style={{margin:0}}
                ellipsis={{
                    rows: 2,
                    expandable: true,
                    symbol: "more",
                    onExpand:()=>{setExpand(true)},
                    onEllipsis:()=>{setExpand(false)}
                }}
                >
                StarCast : {movie.starcast}
                
                
            </Paragraph>
            {/* {expand ?
                <Link href="#">{`₹${movie.price} `}</Link>
            : null } */}
            <Text strong="true">Status: {movie.movieStatus}</Text>
            <br/>
            {/* <Link href="#">{`${movie.movie} `}</Link> */}
            <Link href="#" className="star-link">
            <Rate disabled defaultValue={movie.movie} />
            </Link>
            <br/>
            <Text strong="true" style={{color: "green"}}>Remarks : {`${movie.remarks}`}</Text>
        </Card>
    )
}

export default Movie;