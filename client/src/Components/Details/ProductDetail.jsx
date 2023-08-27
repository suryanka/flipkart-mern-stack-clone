import { LocalOffer } from "@material-ui/icons";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

const SmallText = styled(Box)`
  font-size: 14px;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyleBadge = styled(LocalOffer)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
  border: none;
`;

const ColumnText= styled(TableRow)`
   font-size:14px;
   vertical-align: baseline;
   & > td {
    font-size: 14px;
    margin-top: 10px;
   }
`;
function ProductDetail({ product }) {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 Ratings & 1 Reviews
        <Box component="span">
          <img
            src={fassured}
            alt="fassured"
            style={{ width: 77, marginLeft: 20 }}
          />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388e3c" }}>
          {product.price.discount}
        </Box>
        &nbsp;&nbsp;&nbsp;
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyleBadge />
          Get at flat ₹199T&C
        </Typography>
        <Typography>
          <StyleBadge />
          Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth
          ₹10,000
        </Typography>
        <Typography>
          <StyleBadge />
          Purchase now & get 1 surprise cashback coupon in Future
        </Typography>
        <Typography>
          <StyleBadge />
          10% off on Federal Bank Credit Card Txns, up to ₹1,500 on orders of
          ₹5,000 and aboveT&C
        </Typography>
        <Typography>
          <StyleBadge />
          10% instant discount on PNB Credit Card, up to ₹2000, on orders of
          ₹5,000 and aboveT&C
        </Typography>
        <Typography>
          <StyleBadge />
          10% off on Federal Bank Debit Card Txns, up to ₹1,250 on orders of
          ₹5,000 and aboveT&C
        </Typography>
        <Typography>
          <StyleBadge />
          5% Cashback on Flipkart Axis Bank CardT&C
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "#2874f0" }}>
                SuperCommNet
              </Box>
              <Typography>GST invoice available</Typography>
              <Typography>
                View more sellers satrting from ₹{product.price.cost}
              </Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colspan={2}>
              <img src={adURL} style={{width: 390}} alt="flipkartPoints"/>
            </TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </ColumnText>


        </TableBody>
      </Table>
    </>
  );
}

export default ProductDetail;
