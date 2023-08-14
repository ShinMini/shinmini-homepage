import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import replaceQuotes from './replace-quotes';

export const BLIND_REASON = {
  UNRELATED_REVIEW: 'UNRELATED_REVIEW',
  CURSE_SLANDER: 'CURSE_SLANDER',
  PERSONAL_INFORMATION_LEAK_RISK: 'PERSONAL_INFORMATION_LEAK_RISK',
  OBSCENE_HARMFUL: 'OBSCENE_HARMFUL',
  AD_PR: 'AD_PR',
  COPYRIGHT_THEFT: 'COPYRIGHT_THEFT',
  TEST: 'TEST',
  ETC: 'ETC',
} as const;

export const BLIND_STATUS = {
  NONE: 'NONE',
  REVIEW_BLINDED: 'REVIEW_BLINDED',
  IMAGE_BLINDED: 'IMAGE_BLINDED',
} as const;

export const REVIEW_STATUS = {
  NORMAL: 'NORMAL',
  DELETED: 'DELETED',
  BLINDED: 'BLINDED',
} as const;

export const REPORT_PROCESS = {
  REJECT: 'REJECT',
  APPROVE_BLIND: 'APPROVE_BLIND',
  APPROVE_IMAGE_BLIND: 'APPROVE_IMAGE_BLIND',
  APPROVE: 'APPROVE',
} as const;

class Review {
  id: number;
  createdAt: string;
  updatedAt: string;
  blindReason: string;
  blinded: boolean;
  comment: string;
  hasReviewImage: boolean;
  customerId: number;
  customerNickname: string;
  deleted: number;
  orderCompletedAt: string;
  modifier: string | null;
  orderNumber: number;
  platform: string;
  productId: number;
  productImageUrl: string;
  productName: string;
  rating: number;
  ratingDelivery: number;
  ratingQuantity: number;
  ratingTaste: number;
  vendorId: number;
  vendorName: string;
  productPrice: string;
  productQuantity: number;
  orderEtcInfo: string;
  vendorProductId: number;
  servingType: string;

  constructor() {
    const isBlinded = faker.datatype.boolean();
    this.blindReason = isBlinded ? faker.helpers.arrayElement(Object.values(BLIND_REASON)) : '';
    this.blinded = isBlinded;
    this.comment = replaceQuotes(faker.lorem.sentence());
    this.createdAt = this.createRandomDate();
    this.customerId = faker.number.int();
    this.customerNickname = faker.internet.userName();
    this.deleted = faker.datatype.boolean() ? 1 : 0;
    this.hasReviewImage = faker.datatype.boolean(0.75);
    this.id = faker.number.int({ min: 1, max: 9999 });
    this.modifier = faker.internet.userName();
    this.orderCompletedAt = this.createRandomDate();
    this.orderEtcInfo = replaceQuotes(
      `{"customer": {"latitude":${faker.location.latitude()}, "longitude": ${faker.location.longitude()}}}`,
    );
    this.orderNumber = faker.number.int();
    this.platform = 'TGT-staging-min'; // Or any other appropriate value
    this.productId = faker.number.int();
    this.productImageUrl = faker.image.urlLoremFlickr({ category: 'food' });
    this.productName = faker.commerce.productName();
    this.productPrice = faker.commerce.price({ dec: 0 });
    this.productQuantity = faker.number.int({ min: 1, max: 5 });
    this.rating = faker.number.int({ min: 1, max: 5 });
    this.ratingDelivery = faker.number.int({ min: 1, max: 5 });
    this.ratingQuantity = faker.number.int({ min: 1, max: 5 });
    this.ratingTaste = faker.number.int({ min: 1, max: 5 });
    this.servingType = faker.helpers.arrayElement(['VD', 'OD', 'AD']);
    this.updatedAt = this.createRandomDate();
    this.vendorId = faker.number.int();
    this.vendorName = replaceQuotes(faker.company.name());
    this.vendorProductId = faker.number.int();
  }

  createRandomDate(): string {
    const minDate = dayjs().subtract(6, 'M').toDate();
    const maxDate = new Date();
    const randomDate = dayjs(faker.date.between({ from: minDate, to: maxDate })).format('YYYY-MM-DD HH:mm:ss');

    return randomDate;
  }

  toInsertSQL(): string {
    const query = `
    INSERT INTO reviewyo.review
      (id, created_at, updated_at, blind_reason, blinded, COMMENT, customer_id, customer_nickname, deleted, order_completed_at, has_review_image, modifier, order_number, platform, product_id, product_image_url, product_name, rating, rating_delivery, rating_quantity, rating_taste, vendor_id, vendor_name, product_price, product_quantity, order_etc_info, vendor_product_id, serving_type)
    VALUES
      (${this.id}, '${this.createdAt}', '${this.updatedAt}', '${this.blindReason}', ${this.blinded}, '${this.comment}', ${this.customerId}, '${this.customerNickname}', ${this.deleted}, '${this.orderCompletedAt}', ${this.hasReviewImage}, '${this.modifier}', '${this.orderNumber}', '${this.platform}', ${this.productId}, '${this.productImageUrl}', '${this.productName}', ${this.rating}, ${this.ratingDelivery}, ${this.ratingQuantity}, ${this.ratingTaste}, ${this.vendorId}, '${this.vendorName}', ${this.productPrice}, ${this.productQuantity}, '${this.orderEtcInfo}', ${this.vendorProductId}, '${this.servingType}');
  `;
    return query;
  }
}

export default class ReviewGenerator {
  private readonly reviews: Review[] = [];
  private generateCount = 5;

  constructor(count: number) {
    this.generateCount = count;
    this.reviews = this.setReviews();
  }

  setReviews(): Review[] {
    const reviews: Review[] = [];

    for (let i = 0; i < this.generateCount; i++) {
      const review = new Review();
      reviews.push(review);
    }

    // remove duplicate review id
    const reviewIds = reviews.map(review => review.id);
    const uniqueReviewIds = [...new Set(reviewIds)];
    const uniqueReviews = uniqueReviewIds.map(id => reviews.find(review => review.id === id));

    // regenerate review until the number of reviews is equal to the number of unique reviews
    while (reviews.length !== uniqueReviews.length) {
      const review = new Review();
      if (uniqueReviews.find(uniqueReview => uniqueReview?.id === review.id)) continue;
      reviews.push(review);
    }

    return reviews;
  }

  createRandomDate(): string {
    const minDate = dayjs().subtract(6, 'M').toDate();
    const maxDate = new Date();
    const randomDate = dayjs(faker.date.between({ from: minDate, to: maxDate })).format('YYYY-MM-DD HH:mm:ss');

    return randomDate;
  }

  generateReviewSQLInsert(): string {
    const reviewQuery: string[] = [];

    for (let i = 0; i < this.generateCount; i++) {
      const review = this.reviews[i];
      reviewQuery.push(review.toInsertSQL());
    }

    return reviewQuery.join('\n');
  }

  generateImageSQLInsert(): string {
    const imageQueries: string[] = [];

    for (let i = 0; i < this.generateCount; i++) {
      if (!this.reviews[i].hasReviewImage) continue; // Skip if the review has no image (hasReviewImage = false
      const imageNumbers = faker.number.int({ min: 1, max: 3 });
      for (let j = 0; j < imageNumbers; j++) {
        const isBlinded = faker.datatype.boolean();
        const blindReason = isBlinded ? faker.helpers.arrayElement(Object.values(BLIND_REASON)) : '';

        const reviewId = this.reviews[i].id;
        const imageId = this.reviews[i].id * 10 * (i + 1) + j;

        const createdAt = this.createRandomDate();
        const updatedAt = this.createRandomDate();
        const blinded = isBlinded ? 1 : 0;
        const classifiedAt = this.createRandomDate();
        const classifiedTag = faker.helpers.arrayElement(['FOOD', 'ETC']);
        const imageUrl = faker.image.urlLoremFlickr({ category: 'food' });
        const modifier = faker.internet.userName();
        const sequence = faker.number.int({ min: 1, max: 5 });

        const imageQuery = `
        INSERT INTO image (id, created_at, updated_at, blind_reason, blinded, classified_at, classified_tag, image_url, modifier, sequence, review_id)
        VALUES (${imageId}, '${createdAt}', '${updatedAt}', '${blindReason}', ${blinded}, '${classifiedAt}', '${classifiedTag}', '${imageUrl}', '${modifier}', ${sequence}, ${reviewId});`;
        imageQueries.push(imageQuery);
      }
    }

    return imageQueries.join('\n');
  }

  generateMenuHistory(): string {
    const queries: string[] = [];
    for (let i = 0; i < this.generateCount; i++) {
      const id = faker.number.int({ min: 1, max: 9999 });
      const createdAt = this.createRandomDate();
      const updatedAt = this.createRandomDate();
      const imageUrl = faker.image.urlLoremFlickr({ category: 'food' });
      const name = replaceQuotes(faker.commerce.productName());
      const price = parseInt(faker.commerce.price({ dec: 0 }));
      const productId = faker.number.int({ min: 1, max: 9999 });
      const quantity = faker.number.int({ min: 1, max: 9999 });
      const reviewId = this.reviews[i].id;
      const reviewable = faker.datatype.boolean() ? 1 : 0;
      const vendorProductId = this.reviews[i].vendorProductId;
      const orderHistoryId = this.reviews[i].orderNumber;

      const query = `
        INSERT INTO reviewyo.menu_history (id, created_at, updated_at, image_url, name, price, product_id, quantity, review_id, reviewable, vendor_product_id, order_history_id)
        VALUES (${id}, '${createdAt}', '${updatedAt}', '${imageUrl}', '${name}', ${price}, ${productId}, ${quantity}, ${reviewId}, ${reviewable}, ${vendorProductId}, ${orderHistoryId});`;

      queries.push(query);
    }
    return queries.join('\n');
  }

  generateOrderHistory(): string {
    const queries: string[] = [];
    for (let i = 0; i < this.generateCount; i++) {
      const id = faker.number.int();
      const createdAt = this.createRandomDate();
      const updatedAt = this.createRandomDate();
      const acceptedAt = this.createRandomDate();
      const canceledAt = this.createRandomDate();
      const completedAt = this.createRandomDate();
      const customerId = faker.number.int();
      const customerNickname = faker.internet.userName();
      const etcInfo = this.reviews[i].orderEtcInfo;
      const franchiseId = faker.number.int();
      const orderId = faker.number.int();
      const orderNumber = this.reviews[i].orderNumber;
      const orderStatus = faker.helpers.arrayElement(['accepted', 'canceled', 'completed']);
      const orderType = 'online';
      const phoneNumber = faker.phone.number('+82 010-###-###'); // '010-039-841'
      const platform = 'web';
      const servingType = 'dine-in';
      const userAgent = 'Mozilla/5.0';
      const vendorId = this.reviews[i].vendorId;
      const vendorName = this.reviews[i].vendorName;
      const vendorType = faker.helpers.arrayElement(['restaurant', 'cafe', 'bakery', 'etc']);

      const query = `
        INSERT INTO reviewyo.order_history (id, created_at, updated_at, accepted_at, canceled_at, completed_at, customer_id, customer_nickname, etc_info, franchise_id, order_id, order_number, order_status, order_type, phone_number, platform, serving_type, user_agent, vendor_id, vendor_name, vendor_type)
        VALUES (${id}, '${createdAt}', '${updatedAt}', '${acceptedAt}', '${canceledAt}', '${completedAt}', ${customerId}, '${customerNickname}', '${etcInfo}', ${franchiseId}, ${orderId}, '${orderNumber}', '${orderStatus}', '${orderType}', '${phoneNumber}', '${platform}', '${servingType}', '${userAgent}', ${vendorId}, '${vendorName}', '${vendorType}');`;

      queries.push(query);
    }
    return queries.join('\n');
  }

  generateReviewReport(): string {
    const queries: string[] = [];
    for (let i = 0; i < this.generateCount; i++) {
      const id = faker.number.int();
      const createdAt = this.createRandomDate();
      const updatedAt = this.createRandomDate();
      const customerId = faker.number.int();
      const modifier = faker.internet.userName();
      const process = faker.helpers.arrayElement(Object.values(REPORT_PROCESS));
      const processComment = replaceQuotes(faker.lorem.sentence());
      const processedAt = this.createRandomDate();
      const reportReason = faker.helpers.arrayElement(Object.values(BLIND_REASON));
      const reportReasonComment = replaceQuotes(faker.lorem.sentence());
      const reviewId = this.reviews[i].id;

      const query = `
        INSERT INTO reviewyo.review_report (id, created_at, updated_at, customer_id, modifier, process, process_comment, processed_at, report_reason, report_reason_comment, review_id)
        VALUES (${id}, '${createdAt}', '${updatedAt}', ${customerId}, '${modifier}', '${process}', '${processComment}', '${processedAt}', '${reportReason}', '${reportReasonComment}', ${reviewId});
        `;

      queries.push(query);
    }
    return queries.join('\n');
  }

  // generateReviewReportHistory(): string {
  //   const queries: string[] = [];
  //   for (let i = 0; i < this.generateCount; i++) {
  //     const id = faker.number.int({ min: 1, max: 9999 });
  //     const createdAt = this.createRandomDate();
  //     const updatedAt = this.createRandomDate();
  //     const customerId = faker.number.int({ min: 1, max: 9999 });
  //     const modifier = faker.internet.userName();
  //     const process = faker.lorem.words(2);
  //     const processComment = faker.lorem.sentence();
  //     const processedAt = this.createRandomDate();
  //     const reportReason = faker.lorem.words(3);
  //     const reportReasonComment = faker.lorem.sentence();
  //     const reviewReportId = this.reviews[i].id;

  //     const query = `
  //       INSERT INTO reviewyo.review_report_history (id, created_at, updated_at, customer_id, modifier, process, process_comment, processed_at, report_reason, report_reason_comment, review_report_id)
  //       VALUES (${id}, '${createdAt}', '${updatedAt}', ${customerId}, '${modifier}', '${process}', '${processComment}', '${processedAt}', '${reportReason}', '${reportReasonComment}', ${reviewReportId});`;

  //     queries.push(query);
  //   }
  //   return queries.join('\n');
  // }

  generateAll(): string {
    return [
      this.generateReviewSQLInsert(),
      this.generateImageSQLInsert(),
      this.generateOrderHistory(),
      this.generateMenuHistory(),
      this.generateReviewReport(),
      // this.generateReviewReportHistory(),
    ].join('\n');
  }
}
