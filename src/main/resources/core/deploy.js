/*
 * Copyright 2011-2012 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if (!vertx.deployVerticle) {
  (function() {

    var VERTICLE = 0;
    var WORKER = 1;
    var MODULE = 2;

    function deploy(deployType, name, config, instances, doneHandler) {
      if (!instances) instances = 1;
      if (config) {
        // Convert to Java Json Object
        var str = JSON.stringify(config);
        config = new org.vertx.java.core.json.JsonObject(str);
      } else {
        config = null;
      }
      if (!doneHandler) doneHandler = null;
      switch (deployType) {
        case VERTICLE: {
          org.dynjs.vertx.DynJSVerticleFactory.container.deployVerticle(name, config, instances, doneHandler);
          break;
        }
        case WORKER: {
          org.dynjs.vertx.DynJSVerticleFactory.container.deployWorkerVerticle(name, config, instances, doneHandler);
          break;
        }
        case MODULE: {
          org.dynjs.vertx.DynJSVerticleFactory.container.deployModule(name, config, instances, doneHandler);
          break;
        }
      }
    }

    vertx.deployVerticle = function(main, config, instances, doneHandler) {
      deploy(VERTICLE, main, config, instances, doneHandler);
    }

    vertx.deployWorkerVerticle = function(main, config, instances, doneHandler) {
      deploy(WORKER, main, config, instances, doneHandler);
    }

    vertx.deployModule = function(moduleName, config, instances, doneHandler) {
      deploy(MODULE, moduleName, config, instances, doneHandler);
    }

    vertx.undeployVerticle = function(name, doneHandler) {
      if (!doneHandler) doneHandler = null;
      org.dynjs.vertx.DynJSVerticleFactory.container.undeployVerticle(name, doneHandler);
    }

    vertx.undeployModule = function(name, doneHandler) {
      if (!doneHandler) doneHandler = null;
      org.dynjs.vertx.DynJSVerticleFactory.container.undeployModule(name, doneHandler);
    }

    vertx.exit = function() {
      org.dynjs.vertx.DynJSVerticleFactory.container.exit();
    }

  })();
}


