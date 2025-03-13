#*/psql -U myuser -d mydb -h localhost -W --database access


echo "Checking PostgreSQL status..."
sudo systemctl status postgresql --no-pager

echo "Starting PostgreSQL..."
sudo systemctl start postgresql

sudo systemctl enable postgresql

echo "Verifying PostgreSQL service..."
sudo systemctl status postgresql --no-pager
