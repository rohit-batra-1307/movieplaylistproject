import React, { useState } from 'react';
import { Row, Col, Spin, Input, Button } from "antd";
import Movie from '../Movie';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import {getMovie} from "../../actions/movies";
import styles from './styles';


const MovieList = ({ setSelectedId }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const movies = useSelector((state) => state.movies);
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result?.id;
  // const id = []
  console.log(movies);

  const handleSearch = () => {
    // Implement the search functionality here
    console.log('Search term:', searchTerm);
    // console.log("value",value);
    dispatch(getMovie(userId,searchTerm));
    // You might want to filter the movies here based on the search term
  };

  return !movies.length ? (
    <div style={{ textAlign: "center" }}>
      <Spin size="large" />
    </div>
  ) : (
    <div>
      <div style={{ marginBottom: 20,marginLeft:800, textAlign: 'center' }}>
        <Input 
          placeholder="Search for a movie" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          style={{ width: 200, marginRight: 10 }}
        />
        <Button type="primary" onClick={handleSearch}>Search</Button>
      </div>
      <Row gutter={[20, 20]} style={styles.rows}>
        {
          movies.map((movie) => {
            return (
              <Col key={movie.id} lg={12} xl={8} xxl={6}>
                <Movie setSelectedId={setSelectedId} movie={movie} />
              </Col>
            )
          })
        }
      </Row>
    </div>
  );
}

export default MovieList;




// import React from 'react'
// import {Row, Col, Spin} from "antd"
// import movie from '../movie'
// import { useSelector } from 'react-redux'
// import styles from './styles'

// const MovieList = ({setSelectedId}) => {
//   const movies = useSelector((state)=>state.movies)
//   // const id = []
//   console.log(movies)

//   return !movies.length ? 
//   <div style={{textAlign:"center"}}>
//     <Spin size="large"/>
//   </div> :
//   (
    
//     <Row gutter={[20, 20]} style={styles.rows}>
//         {
//           movies.map((movie) => {
//             return (
//               <Col key ={movie.id} lg={12} xl={8} xxl={6}>
//                 <movie setSelectedId={setSelectedId} movie={movie}/>
//               </Col>
//             )
//           })
//         }
//     </Row>
//   )
// }

// export default MovieList



// import React from 'react'
// import {Row, Col, Spin, Input} from "antd" // Assuming you are using Ant Design
// import Movie from '../Movie';
// import { useSelector } from 'react-redux'
// import styles from './styles'
// import {getMovie} from "../../actions/movies";
// import { useDispatch } from "react-redux";

// const MovieList = ({setSelectedId}) => {
//   const dispatch = useDispatch();
//   const movies = useSelector((state)=>state.movies)
  
//   // const id = []
//   const user = JSON.parse(localStorage.getItem("profile"));
//   const userId = user?.result?.id;
//   console.log("user: ",userId);
//   console.log(movies)
//   // const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (value) => {
//     // Handle search logic here
//     console.log("value",value);
//     dispatch(getMovie(userId,value));
//   }

//   return (
//     <div>
//       <div style={{ marginBottom: '20px' }}> {/* Styling to add margin between button and row */}
//         <Input.Search placeholder="Search" onSearch={handleSearch} style={{ marginRight: '10px' }} />
//       </div>
//       {
//         !movies.length ? 
//         <div style={{textAlign:"center"}}>
//           <Spin size="large"/>
//         </div> :
//         (
//           <Row gutter={[20, 20]} style={styles.rows}>
//             {
//               movies.map((movie) => {
//                 return (
//                   <Col key ={movie.id} lg={12} xl={8} xxl={6}>
//                     <movie setSelectedId={setSelectedId} movie={movie}/>
//                   </Col>
//                 )
//               })
//             }
//           </Row>
//         )
//       }
//     </div>
//   )
// }

// export default MovieList




// import React from 'react'
// import {Row, Col, Spin,Input} from "antd"
// import Movie from '../Movie'
// import { useSelector } from 'react-redux'
// import { useDispatch } from "react-redux";
// import {getMovie} from "../../actions/movies";
// import styles from './styles'


// const MovieList = ({setSelectedId}) => {
//   const dispatch = useDispatch();
//   const movies = useSelector((state)=>state.movies)
//   // const id = []
//   console.log(movies)
//   const user = JSON.parse(localStorage.getItem("profile"));
//   const userId = user?.result?.id;
//   console.log("user: ",userId);
//   console.log(movies)
//   // const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (value) => {
//     // Handle search logic here
//     console.log("value",value);
//     dispatch(getMovie(userId,value));
//   }


//   return (
//     <div>
//       <div style={{ marginBottom: '20px' }}> {/* Styling to add margin between button and row */}
//         <Input.Search placeholder="Search" onSearch={handleSearch} style={{ marginRight: '10px' }} />
//       </div>
//       {
//         !movies.length ? 
//         <div style={{textAlign:"center"}}>
//           <Spin size="large"/>
//         </div> :
//         (
//           <Row gutter={[20, 20]} style={styles.rows}>
//             {
//               movies.map((movie) => {
//                 return (
//                   <Col key ={movie.id} lg={12} xl={8} xxl={6}>
//                     <movie setSelectedId={setSelectedId} movie={movie}/>
//                   </Col>
//                 )
//               })
//             }
//           </Row>
//         )
//       }
//     </div>
//   )
// }

// export default MovieList



// import React from 'react'
// import {Row, Col, Spin} from "antd"
// import Movie from '../Movie'
// import { useSelector } from 'react-redux'
// import styles from './styles'

// const MovieList = ({setSelectedId}) => {
//   const movies = useSelector((state)=>state.movies)
//   // const id = []
//   console.log(movies)

//   return !movies.length ? 
//   <div style={{textAlign:"center"}}>
//     <Spin size="large"/>
//   </div> :
//   (
//     <Row gutter={[20, 20]} style={styles.rows}>
//         {
//           movies.map((movie) => {
//             return (
//               <Col key ={movie.id} lg={12} xl={8} xxl={6}>
//                 <Movie setSelectedId={setSelectedId} movie={movie}/>
//               </Col>
//             )
//           })
//         }
//     </Row>
//   )
// }

// export default MovieList

