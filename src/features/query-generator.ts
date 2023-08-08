import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';

function createRandomDate(): string {
  const minDate = new Date(2023, 2, 6);
  const maxDate = new Date();
  const randomDate = dayjs(faker.date.between({ from: minDate, to: maxDate })).format('YYYY-MM-DD HH:mm:ss');

  return randomDate;
}

export enum BLIND_REASON {
  UNRELATED_REVIEW = 'UNRELATED_REVIEW',
  CURSE_SLANDER = 'CURSE_SLANDER',
  PERSONAL_INFORMATION_LEAK_RISK = 'PERSONAL_INFORMATION_LEAK_RISK',
  OBSCENE_HARMFUL = 'OBSCENE_HARMFUL',
  AD_PR = 'AD_PR',
  COPYRIGHT_THEFT = 'COPYRIGHT_THEFT',
  TEST = 'TEST',
  ETC = 'ETC',
}

const ratingOption = { min: 1, max: 5 };

export function generateRandomSQLInsert(count: number): string {
  const insertQueries: string[] = [];
  const imageQueries: string[] = [];

  for (let i = 0; i < count; i++) {
    const id = faker.number.int({ min: 1, max: 9999 });
    const createdAt = createRandomDate();
    const updatedAt = createRandomDate();
    const blindReason = faker.helpers.arrayElement(Object.values(BLIND_REASON));
    const blinded = faker.datatype.boolean();
    const comment = faker.lorem.paragraph({ min: 1, max: 5 });
    const customerId = faker.number.int({ min: 100, max: 9999 });
    const customerNickname = faker.internet.userName();
    const deleted = faker.datatype.boolean();
    const orderCompletedAt = createRandomDate();
    const hasReviewImage = faker.datatype.boolean();
    const modifier = faker.internet.userName();
    const orderNumber = `M${faker.finance.bic({
      includeBranchCode: true,
    })}`;
    const platform = faker.commerce.department();
    const productId = faker.number.int({ min: 1, max: 9999 });
    const productImageUrl = faker.image.urlLoremFlickr({ category: 'food' });
    const productName = faker.commerce.productName();
    const rating = faker.number.int(ratingOption);
    const ratingDelivery = faker.number.int(ratingOption);
    const ratingQuantity = faker.number.int(ratingOption);
    const ratingTaste = faker.number.int(ratingOption);

    const vendorId = faker.number.int({ min: 1, max: 9999 });
    const vendorName = faker.company.name();
    const productPrice = faker.commerce.price({ min: 1000, max: 35400, dec: 0 });
    const productQuantity = faker.number.int(ratingOption);
    const orderEtcInfo = JSON.stringify({
      customer: {
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
      },
    });
    const vendorProductId = faker.number.int({ min: 1, max: 9999 });
    const servingType = faker.helpers.arrayElement(['VD', 'OD', 'AD']);
    const commentEscaped = comment.replace(/'/g, "''"); // Escape single quotes in comment
    const insertQuery = `
      INSERT INTO reviewyo.review (id, created_at, updated_at, blind_reason, blinded, COMMENT, customer_id, customer_nickname, deleted, order_completed_at, has_review_image, modifier, order_number, platform, product_id, product_image_url, product_name, rating, rating_delivery, rating_quantity, rating_taste, vendor_id, vendor_name, product_price, product_quantity, order_etc_info, vendor_product_id, serving_type)
      VALUES (${id}, '${createdAt}', '${updatedAt}', '${blindReason}', ${blinded}, '${commentEscaped}', ${customerId}, '${customerNickname}', ${deleted}, '${orderCompletedAt}', ${hasReviewImage}, '${modifier}', '${orderNumber}', '${platform}', ${productId}, '${productImageUrl}', '${productName}', ${rating}, ${ratingDelivery}, ${ratingQuantity}, ${ratingTaste}, ${vendorId}, '${vendorName}', ${productPrice}, ${productQuantity}, '${orderEtcInfo}', ${vendorProductId}, '${servingType}');
    `;
    insertQueries.push(insertQuery);

    // image query
    const imageId = faker.number.int({ min: 1, max: 9999 });
    const classifiedAt = createRandomDate();
    const classifiedTag = faker.helpers.arrayElement(['FOOD', 'ETC']);
    const imageUrl = faker.image.urlLoremFlickr({ category: 'food' });
    const sequence = faker.number.int({ min: 1, max: 5 });
    const reviewId = id;

    const imageQuery = `
    INSERT INTO reviewyo.image (id, created_at, blind_reason, blinded, classified_at, classified_tag, image_url, modifier, sequence, review_id)
    VALUES (${imageId}, '${createdAt}', '${blindReason}', ${blinded}, '${classifiedAt}', '${classifiedTag}', '${imageUrl}', '${modifier}', ${sequence}, ${reviewId});
  `;

    imageQueries.push(imageQuery);
  }

  return insertQueries.join('\n') + '\n' + imageQueries.join('\n');
}
