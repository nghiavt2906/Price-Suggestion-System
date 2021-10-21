import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import getProductConditionLabel from '../utils/getProductConditionLabel';
import getShippingLabel from '../utils/getShippingLabel';
import ProgressBar from '@ramonak/react-progress-bar';

function Details({ show, handleClose, data }) {
  const rgbToHex = (r, g, b) =>
    '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  const percentToRGB = (percent) => {
    const redAndGreen = (512 * percent) / 100;
    return redAndGreen > 255
      ? [2 * 255 - redAndGreen, 255, 0]
      : [255, redAndGreen, 0];
  };

  return (
    <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title style={{ color: 'black' }}>Product Details</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: 'black' }}>
        {data !== null && (
          <>
            <h4>{data.name}</h4>
            <span>
              <b>Category:</b> {data.category_name ?? 'empty'}
            </span>{' '}
            <br />
            <span>
              <b>Brand:</b> {data.brand_name ?? 'empty'}
            </span>{' '}
            <br />
            <span>
              <b>Condition:</b>{' '}
              {getProductConditionLabel(data.item_condition_id)}
            </span>{' '}
            <br />
            <span>
              <b>Shipping:</b> {getShippingLabel(data.shipping)}
            </span>{' '}
            <br />
            <span>
              <b>Description:</b> {data.item_description}
            </span>{' '}
            <br />
            <span>
              <h4 style={{ display: 'inline' }}>Predicted price: </h4>
              <b style={{ fontSize: '1.5rem', color: 'green' }}>
                ${data.price}
              </b>
            </span>
          </>
        )}

        <hr />
        <div className="mt-4">
          <h4>Similar Products</h4>
        </div>

        <Table striped bordered hover variant="dark" className="mt-3">
          <thead>
            <tr>
              <th>Product name</th>
              <th>Category name</th>
              <th>Brand</th>
              <th>Condition</th>
              <th>Shipping</th>
              <th>Description</th>
              <th>Price</th>
              <th>Similarity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bubble Mailers/Labels/Stickers</td>
              <td>Other/Office supplies/Shipping Supplies</td>
              <td>empty</td>
              <td>{getProductConditionLabel(5)}</td>
              <td>{getShippingLabel(1)}</td>
              <td>
                "20 - 4.5X8 Bubble Mailers (usable space 4.5X7) (Pink) 20 -
                Shipping labels 25 - 1X3 Fragile stickers ➕➕Available to
                add-on, just comment below:➕➕ Pic 2 - Shipping Labels 20 for
                [rm] Pic 3 - Thank you please rate stickers 10/[rm] or 30/[rm]
                Pic 4 - 1X3 Fragile Stickers 25 for [rm] **Ships next business
                day, or sooner Monday - Saturday (except holidays) - Lined with
                3/16"" bubble wrap - Approved by all carriers: USPS, UPS, FedEX,
                DHL - Self Sealing - Water & Tear Resistant - CUSTOM LISTINGS
                AVAILABLE @MrsCoolBreeze Price is FIRMs"
              </td>
              <td style={{ color: 'green' }}>
                <b>$9.36</b>
              </td>
              <td style={{ width: '12%' }}>
                <ProgressBar
                  completed={86}
                  bgColor={rgbToHex(...percentToRGB(86))}
                  labelAlignment="outside"
                />
              </td>
            </tr>
            <tr>
              <td>29 - 6.5X10 Bubble Mailers</td>
              <td>Other/Office supplies/Shipping Supplies</td>
              <td>empty</td>
              <td>{getProductConditionLabel(4)}</td>
              <td>{getShippingLabel(1)}</td>
              <td>
                29 - 6.5X10 Bubble Mailers (any colors are ok'd by the buyer)
              </td>
              <td style={{ color: 'green' }}>
                <b>$12.0</b>
              </td>
              <td style={{ width: '12%' }}>
                <ProgressBar
                  completed={79}
                  bgColor={rgbToHex(...percentToRGB(79))}
                  labelAlignment="outside"
                />
              </td>
            </tr>
            <tr>
              <td>35 Poly Mailers 1</td>
              <td>Other/Office supplies/Shipping Supplies</td>
              <td>empty</td>
              <td>{getProductConditionLabel(4)}</td>
              <td>{getShippingLabel(1)}</td>
              <td>
                "SUPERIOR QUALITY Very Strong & Durable Tear, Water & Dirt
                Resistant (35) Pink Roses Self Sealing Poly Mailers NOT Bubble
                Padded Polymailers Envelopes for Shipping 6"" x 9"" Size 100%
                Recyclable 2.5mil Thickness Stretchable To Allow Overstuffing!
                Very Lightweight - GREAT For Shipping! Great for Clothing Items
                Can Be Used For Make Up, Video Games, DVDs & Other Small Items
                WITH The Use Of Bubble Wrap!!! BRAND NEW FAST FREE SHIPPING
                USPS, UPS, FedEx & DHL Approved!!! For Any 6"" x 9"" Size: 30 =
                [rm] 35 = [rm] 45 = [rm] 50 = [rm] 100 = [rm] 200 = [rm] Search
                NirmWorx and use the refine and filter tools to browse all our
                GREAT DEALS! We Ship Orders Within 24 Hours Except Sundays -
                Same Day Shipping On Orders Placed By 2PM EST! Price is Firm
                PLEASE NO Low Ballers - We Do Not Respond We Offer Deals on
                Bundles Please Contact Us First! We Take Great Pride in
                Providing QUALITY Products and The Most EXCELLENT Service!
                Please Check Our Ratings & Revie
              </td>
              <td style={{ color: 'green' }}>
                <b>$6.0</b>
              </td>
              <td style={{ width: '12%' }}>
                <ProgressBar
                  completed={72}
                  bgColor={rgbToHex(...percentToRGB(72))}
                  labelAlignment="outside"
                />
              </td>
            </tr>
            <tr>
              <td>Custom labels / for Mona</td>
              <td>Other/Office supplies/Shipping Supplies</td>
              <td>Anvie</td>
              <td>{getProductConditionLabel(4)}</td>
              <td>{getShippingLabel(0)}</td>
              <td>
                Reorder It's a girl sticker 30 labels Thank you labels 60 labels
                For party favor
              </td>
              <td style={{ color: 'green' }}>
                <b>$8.0</b>
              </td>
              <td style={{ width: '12%' }}>
                <ProgressBar
                  completed={48}
                  bgColor={rgbToHex(...percentToRGB(48))}
                  labelAlignment="outside"
                />
              </td>
            </tr>
            <tr>
              <td>Floral Kimono</td>
              <td>Women/Sweaters/Cardigan</td>
              <td>Vintage</td>
              <td>{getProductConditionLabel(4)}</td>
              <td>{getShippingLabel(1)}</td>
              <td>
                floral kimono -never worn -lightweight and perfect for hot
                weather
              </td>
              <td style={{ color: 'green' }}>
                <b>$789.463</b>
              </td>
              <td style={{ width: '12%' }}>
                <ProgressBar
                  completed={24}
                  bgColor={rgbToHex(...percentToRGB(24))}
                  labelAlignment="outside"
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Details;
