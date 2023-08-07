import { faker } from '@faker-js/faker/locale/ko';

export function generateRandomSQLInsert(count: number): string {
  const insertQueries: string[] = [];

  for (let i = 0; i < count; i++) {
    const id = faker.string.uuid();
    const createdAt = faker.date.recent().toISOString();
    const updatedAt = faker.date.recent().toISOString();
    const comment = faker.lorem.words(5);
    const customerId = faker.number.int();
    const customerNickname = faker.internet.userName();
    const orderCompletedAt = faker.date.recent().toISOString();
    const orderNumber = `M${faker.number.int()}`;
    const platform = faker.helpers.arrayElement(['YGY-staging-g', 'TGT-staging-min']);
    const productId = faker.number.int();
    const productImageUrl = faker.image.urlLoremFlickr({ category: 'food' });
    const productName = faker.commerce.productName();
    const rating = faker.number.int(5);
    const vendorId = faker.number.int();
    const vendorName = faker.company.name();
    const productPrice = faker.commerce.price();
    const productQuantity = faker.number.int(5);

    const insertQuery = `
INSERT INTO reviewyo.review
  (id, created_at, updated_at, COMMENT, customer_id, customer_nickname, order_completed_at, order_number, platform, product_id, product_image_url, product_name, rating, vendor_id, vendor_name, product_price, product_quantity)
VALUES
  (${id}, '${createdAt}', '${updatedAt}', '${comment}', ${customerId}, '${customerNickname}', '${orderCompletedAt}', '${orderNumber}', '${platform}', ${productId}, '${productImageUrl}', '${productName}', ${rating}, ${vendorId}, '${vendorName}', ${productPrice}, ${productQuantity});
`;
    insertQueries.push(insertQuery);
  }

  return insertQueries.join('\n');
}

// Usage:
const sql = generateRandomSQLInsert(10);
console.log(sql);
