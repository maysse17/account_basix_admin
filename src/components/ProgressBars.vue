<template>
    <div class="progress-bars">


        <div class="col-md-6">

            <card header-text="Vue Progress Bar">
                <div class="card-body">
                    <vue-progressbar></vue-progressbar>
                </div>
            </card>
            <card header-text="Background">
                <div class="card-body">
                  <div class="progress mb-3">
                      <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-2">
                      <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-2">
                      <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-2">
                      <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
            </card>

            <card header-text="Labels">
                <div class="card-body">
                  <div class="progress mb-2">
                      <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                  </div>
                  <div class="progress mb-2">
                      <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                  </div>
                  <div class="progress mb-2">
                      <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                  </div>
                  <div class="progress mb-2">
                      <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                  </div>
                </div>
            </card>


        </div>


        <div class="col-md-6">

            <card header-text="Animated Background">
                <div class="card-body">
                  <bootstrap-progress-bar type="success" :width="25"></bootstrap-progress-bar>
                  <bootstrap-progress-bar type="info" :width="50"></bootstrap-progress-bar>
                  <bootstrap-progress-bar type="warning" :width="75"></bootstrap-progress-bar>
                  <bootstrap-progress-bar type="danger" :width="100"></bootstrap-progress-bar>
                </div>
            </card>

            <card header-text="Animated Labels">
                <div class="card-body">
                  <bootstrap-progress-bar :label="30" type="success" :width="25"></bootstrap-progress-bar>
                  <bootstrap-progress-bar :label="50" type="info" :width="50"></bootstrap-progress-bar>
                  <bootstrap-progress-bar :label="75" type="warning" :width="75"></bootstrap-progress-bar>
                  <bootstrap-progress-bar :label="100" type="danger" :width="100"></bootstrap-progress-bar>
                </div>
            </card>

            <card header-text="Animated Striped">
                <div class="card-body">
                  <bootstrap-progress-bar :label="30" type="success striped" :width="25"></bootstrap-progress-bar>
                  <bootstrap-progress-bar :label="50" type="info striped" :width="50"></bootstrap-progress-bar>
                  <bootstrap-progress-bar :label="75" type="warning striped" :width="75"></bootstrap-progress-bar>
                  <bootstrap-progress-bar :label="100" type="danger striped" :width="100"></bootstrap-progress-bar>
                </div>
            </card>


            <card header-text="Heights">
                <div class="card-body">
                  <div class="progress mb-2">
                      <div class="progress-bar bg-success" role="progressbar" style="width: 25%; height: 5px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-2">
                      <div class="progress-bar bg-info" role="progressbar" style="width: 50%; height: 5px;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-2">
                      <div class="progress-bar bg-warning" role="progressbar" style="width: 75%; height: 5px;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-2">
                      <div class="progress-bar bg-danger" role="progressbar" style="width: 100%; height: 5px;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
            </card>

            <card header-text="Striped">
                <div class="card-body">
                  <div class="progress mb-2">
                      <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                  </div>
                  <div class="progress mb-2">
                      <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-2">
                      <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-2">
                      <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
            </card>


        </div>

    </div>
</template>


<script>
import BootstrapProgressBar from './progressbar/BootstrapProgressBar.vue'
import VueProgress from './progressbar/VueProgress.vue'

//import Buttons from '../components/Buttons.vue';

  export default {
    components: {
      BootstrapProgressBar,
      VueProgressBar: VueProgress
    }
}
</script>
