import { Card, CardContent } from "@/components/ui/card";

const Tracking = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero / Title */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center space-y-4">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Shipment Tracking
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Track Your Order
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated on your heritage products journey from India to your destination.
          </p>
        </div>
      </section>

      {/* Coming Soon + Features */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="bg-primary rounded-3xl shadow-lg">
            <CardContent className="p-10 md:p-12 space-y-10 text-primary-foreground">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <span className="text-3xl">🕒</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Coming Soon</h2>
                <p className="text-base md:text-lg max-w-2xl mx-auto text-primary-foreground/90">
                  We&apos;re building an advanced tracking system that will allow you to monitor your
                  shipments in real time, from our warehouses in India to your doorstep anywhere in the world.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-primary/10 border-primary/20">
                  <CardContent className="p-6 text-center space-y-2 text-primary-foreground">
                    <div className="text-2xl">📍</div>
                    <h3 className="font-semibold text-lg">Real-time Location</h3>
                    <p className="text-sm text-primary-foreground/80">
                      Track your shipment location with GPS precision.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/10 border-primary/20">
                  <CardContent className="p-6 text-center space-y-2 text-primary-foreground">
                    <div className="text-2xl">📦</div>
                    <h3 className="font-semibold text-lg">Delivery Updates</h3>
                    <p className="text-sm text-primary-foreground/80">
                      Get instant notifications on delivery status.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/10 border-primary/20">
                  <CardContent className="p-6 text-center space-y-2 text-primary-foreground">
                    <div className="text-2xl">📚</div>
                    <h3 className="font-semibold text-lg">Order History</h3>
                    <p className="text-sm text-primary-foreground/80">
                      Access complete history of all your orders.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Current Order Process */}
      <section className="pb-20">
        <div className="container mx-auto px-4 text-center space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-foreground">Current Order Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Until our tracking system is ready, here&apos;s how we keep you informed about your orders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-lg">Order Confirmation</h3>
              <p className="text-sm text-muted-foreground">
                Immediate email confirmation with order details and estimated timeline.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-lg">Preparation Updates</h3>
              <p className="text-sm text-muted-foreground">
                Regular updates during product sourcing and quality checks.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-lg">Shipping Notification</h3>
              <p className="text-sm text-muted-foreground">
                Detailed shipping information with carrier details and tracking number (where available).
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-lg">Delivery Confirmation</h3>
              <p className="text-sm text-muted-foreground">
                Final confirmation when your products reach their destination.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tracking;