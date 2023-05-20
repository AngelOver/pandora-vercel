import os
from src.pandora_cloud.server import app

if __name__=='__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000), host='0.0.0.0')