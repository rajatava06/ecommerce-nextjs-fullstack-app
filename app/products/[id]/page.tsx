import { ProductDetail } from "@/components/product-detail";
import { stripe } from "@/lib/stripe";

export default async function ProductPage({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const product = await stripe.products.retrieve(resolvedParams.id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product));
  return <ProductDetail product={plainProduct} />;
}
