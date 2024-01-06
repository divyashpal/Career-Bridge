import {
  array,
  string,
  twodarray,
  searchsort,
  backtrack,
  linkedlist,
} from '../Api/data';
import { Helmet } from 'react-helmet';

function DsaSheet() {
  return (
    <div>
      <Helmet>
        <title>
          DsaSheet
        </title>
      </Helmet>
      <div className='rang'>
        <header className='arrayHead'>
          {/* Array */}
          <h1 style={{ marginBottom: "20px" }}>Array</h1>
          <table>
            <tr>
              <th>Serial no.</th>
              <th>Question</th>
              <th>Companies</th>
            </tr>
            {array.map((data, key) => {
              return (
                <tr>
                  <td>{data.id}</td>
                  <td>
                    <a style={{ color: 'black', textDecoration: 'none' }} href={data.link}> {data.question}</a>
                  </td>
                  <td>{data.companies}</td>
                </tr>
              );
            })}
          </table>
        </header>


        <header className='arrayHead'>
          {/* String */}
          <h1 style={{ marginBottom: "20px" }}>String</h1>
          <table>
            <tr>
              <th>Serial no.</th>
              <th>Question</th>
              <th>Companies</th>
            </tr>
            {string.map((data, key) => {
              return (
                <tr>
                  <td>{data.id}</td>
                  <td>
                    <a style={{ color: 'black', textDecoration: 'none' }} href={data.link}>{data.question}</a>
                  </td>
                  <td>{data.companies}</td>
                </tr>
              );
            })}
          </table>
        </header>


        <header className="arrayHead">
          {/* 2D-Array */}
          <h1 style={{ marginBottom: "20px" }}>2D- Array</h1>
          <table>
            <tr>
              <th>Serial no.</th>
              <th>Question</th>
              <th>Companies</th>
            </tr>
            {twodarray.map((data, key) => {
              return (
                <tr>
                  <td>{data.id}</td>
                  <td>
                    <a style={{ color: 'black', textDecoration: 'none' }} href={data.link}>{data.question}</a>
                  </td>
                  <td>{data.companies}</td>
                </tr>
              );
            })}
          </table>
        </header>


        <header className='arrayHead'>
          {/* Searching and Sorting */}
          <h1 style={{ marginBottom: "20px" }}>Searching and Sorting</h1>
          <table>
            <tr>
              <th>Serial no.</th>
              <th>Question</th>
              <th>Companies</th>
            </tr>
            {searchsort.map((data, key) => {
              return (
                <tr>
                  <td>{data.id}</td>
                  <td>
                    <a style={{ color: 'black', textDecoration: 'none' }} href={data.link}>{data.question}</a>
                  </td>
                  <td>{data.companies}</td>
                </tr>
              );
            })}
          </table>
        </header>


        <header className="arrayHead">
          {/* BackTracking */}
          <h1 style={{ marginBottom: "20px" }}>Searching and Sorting</h1>
          <table>
            <tr>
              <th>Serial no.</th>
              <th>Question</th>
              <th>Companies</th>
            </tr>
            {backtrack.map((data, key) => {
              return (
                <tr>
                  <td>{data.id}</td>
                  <td>
                    <a style={{ color: 'black', textDecoration: 'none' }} href={data.link}>{data.question}</a>
                  </td>
                  <td>{data.companies}</td>
                </tr>
              );
            })}
          </table>
        </header>


        <header className="arrayHead">
          {/* Linked-List */}
          <h1 style={{ marginBottom: "20px" }}>Linked List</h1>
          <table>
            <tr>
              <th>Serial no.</th>
              <th>Question</th>
              <th>Companies</th>
            </tr>
            {linkedlist.map((data, key) => {
              return (
                <tr>
                  <td>{data.id}</td>
                  <td>
                    <a style={{ color: 'black', textDecoration: 'none' }} href={data.link}>{data.question}</a>
                  </td>
                  <td>{data.companies}</td>
                </tr>
              );
            })}
          </table>
        </header>
      </div>
    </div>
  );
}

export default DsaSheet;
