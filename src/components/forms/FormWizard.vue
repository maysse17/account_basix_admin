<template>
    <div class="animated fadeIn">

        <card header-text="Basic Wizard - Circle" >
            <form-wizard title="" subtitle="">

                <tab-content title="Personal details">
                    <section id="wizard-p-0" role="tabpanel" aria-labelledby="wizard-h-0" class="body current col-sm-8" aria-hidden="false" style="display: block; left: 0px;">
                        <form class="form-horizontal" _lpchecked="1">
                            <div class="form-group row">
                                <label for="fullname" class="col-sm-2 col-form-label">Full Name</label>
                                <div class="col-sm-10">
                                    <input type="text" id="fullname" name="fullname" placeholder="Entar Full Name" class="form-control">
                                </div>
                             </div>
                             <div class="form-group row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="staticEmail" placeholder="email@example.com">
                                </div>
                             </div>
                             <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                  <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                              </div>
                          </div>
                        </form>
                    </section>
                </tab-content>

                <tab-content title="Additional Info">
                    <section id="wizard-p-2" role="tabpanel" aria-labelledby="wizard-2" class="body current col-sm-8" aria-hidden="false" style="display: block; left: 0px;">
                            <form class="form-horizontal">
                                <div class="form-group row">
                                    <label for="phone" class="col-sm-2 col-form-label">Phone</label>
                                    <div class="col-sm-10">
                                        <input type="text" id="phone" name="phone" placeholder="Phone" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="mobile" class="col-sm-2 col-form-label">Mobile</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="mobile" placeholder="Mobile Number">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Address</label>
                                    <div class="col-sm-10">
                                        <textarea name="textarea-input" id="textarea-input" rows="9" placeholder="Content..." class="form-control"></textarea>
                                  </div>
                              </div>
                          </form>
                      </section>
                </tab-content>

                <tab-content title="Last step">
                    Congratulations This is the Final Step
                </tab-content>

            </form-wizard>
        </card>

        <card header-text="Square Wizard">
            <form-wizard ref="wizard" shape="square" color="#3498db" title="" subtitle="">

                  <tab-content title="Personal details" icon="fa fa-user">
                    <section id="wizard-p-0" role="tabpanel" aria-labelledby="wizard-h-0" class="body current col-sm-8" aria-hidden="false" style="display: block; left: 0px;">
                        <form class="form-horizontal" _lpchecked="1">
                            <div class="form-group row">
                                <label for="fullname" class="col-sm-2 col-form-label">Full Name</label>
                                <div class="col-sm-10">
                                    <input type="text" id="fullname" name="fullname" placeholder="Entar Full Name" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="staticEmail" placeholder="email@example.com">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                  <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                              </div>
                          </div>
                      </form>
                  </section>
                  </tab-content>

                  <tab-content title="Additional Info" icon="fa fa-cog">
                    <section id="wizard-p-2" role="tabpanel" aria-labelledby="wizard-2" class="body current col-sm-8" aria-hidden="false" style="display: block; left: 0px;">
                            <form class="form-horizontal">
                                <div class="form-group row">
                                    <label for="phone" class="col-sm-2 col-form-label">Phone</label>
                                    <div class="col-sm-10">
                                        <input type="text" id="phone" name="phone" placeholder="Phone" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="mobile" class="col-sm-2 col-form-label">Mobile</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="mobile" placeholder="Mobile Number">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Address</label>
                                    <div class="col-sm-10">
                                        <textarea name="textarea-input" id="textarea-input" rows="9" placeholder="Content..." class="form-control"></textarea>
                                  </div>
                              </div>
                          </form>
                      </section>
                  </tab-content>
                  <tab-content title="Last step" icon="fa fa-check">
                    Congratulations This is the Final Step
                  </tab-content>
                  <template slot="footer" scope="props">
                   <div class=wizard-footer-left>
                       <wizard-button  v-if="props.activeTabIndex > 0 && !props.isLastStep" :style="props.fillButtonStyle">Previous</wizard-button>
                    </div>
                    <div class="wizard-footer-right">
                      <wizard-button v-if="!props.isLastStep"@click.native="props.nextTab()" class="wizard-footer-right" :style="props.fillButtonStyle">Next</wizard-button>

                      <wizard-button v-else @click.native="alert('Done')" class="wizard-footer-right finish-button" :style="props.fillButtonStyle">{{props.isLastStep ? 'Done' : 'Next'}}</wizard-button>
                    </div>

                  </template>
                </form-wizard>
        </card>



            <card header-text="Tab Wizard: Custom button and title text">
                 <form-wizard @on-complete="onComplete"
                                       shape="tab"
                                       color="#e67e22"
                                       title="Awesome Wizard"
                                       >

                     <tab-content title="Personal details" icon="fa fa-user">
                        <section id="wizard-p-0" role="tabpanel" aria-labelledby="wizard-h-0" class="body current col-sm-8" aria-hidden="false" style="display: block; left: 0px;">
                            <form class="form-horizontal" _lpchecked="1">
                                <div class="form-group row">
                                    <label for="firstname" class="col-sm-2 col-form-label">First Name</label>
                                    <div class="col-sm-10">
                                        <input type="text" id="firstname" name="firstname" placeholder="Entar First Name" class="form-control">
                                    </div>
                                 </div>
                                 <div class="form-group row">
                                    <label for="lastname" class="col-sm-2 col-form-label">Last Name</label>
                                    <div class="col-sm-10">
                                        <input type="text" id="lastname" name="lastname" placeholder="Entar Last Name" class="form-control">
                                    </div>
                                 </div>

                            </form>
                        </section>
                     </tab-content>
                     <tab-content title="Is Logged In?" icon="fa fa-user">
                        <section id="wizard-p-2" role="tabpanel" aria-labelledby="wizard-2" class="body current col-sm-8" aria-hidden="false" style="display: block; left: 0px;">
                                <form class="form-horizontal">
                                    <div class="form-group row">
                                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="staticEmail" placeholder="email@example.com">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                        <div class="col-sm-10">
                                          <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                                      </div>
                                  </div>
                              </form>
                          </section>
                     </tab-content>
                     <tab-content title="Additional Info" icon="fa fa-cog">
                        <section id="wizard-p-2" role="tabpanel" aria-labelledby="wizard-2" class="body current col-sm-8" aria-hidden="false" style="display: block; left: 0px;">
                                <form class="form-horizontal">
                                    <div class="form-group row">
                                        <label for="phone" class="col-sm-2 col-form-label">Phone</label>
                                        <div class="col-sm-10">
                                            <input type="text" id="phone" name="phone" placeholder="Phone" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="mobile" class="col-sm-2 col-form-label">Mobile</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="mobile" placeholder="Mobile Number">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Address</label>
                                        <div class="col-sm-10">
                                            <textarea name="textarea-input" id="textarea-input" rows="9" placeholder="Content..." class="form-control"></textarea>
                                      </div>
                                  </div>
                              </form>
                          </section>
                     </tab-content>
                     <tab-content title="Final step" icon="fa fa-map">
                       Congratulations This is the Final Step
                     </tab-content>

                     <template slot="footer" scope="props">
                       <div class=wizard-footer-left>
                           <wizard-button  v-if="props.activeTabIndex > 0 && !props.isLastStep" @click.native="props.prevTab()" :style="props.fillButtonStyle">Previous</wizard-button>
                        </div>
                        <div class="wizard-footer-right">
                          <wizard-button v-if="!props.isLastStep"@click.native="props.nextTab()" class="wizard-footer-right" :style="props.fillButtonStyle">Next</wizard-button>

                          <wizard-button v-else @click.native="alert('Done')" class="wizard-footer-right finish-button" :style="props.fillButtonStyle">{{props.isLastStep ? 'Done' : 'Next'}}</wizard-button>
                        </div>
                      </template>
                 </form-wizard>
            </card>

    </div>

</template>


<script>
    import {FormWizard, TabContent} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'

    export default{
        //component code
        components: {
          FormWizard,
          TabContent
      },
       methods: {
           onComplete: function(){
              alert('Yay. Done!');
          },
          isLastStep() {
              if (this.$refs.wizard) {

                return this.$refs.wizard.isLastStep
            }
            return false
            }
        }
    }

</script>

<style>
    .vue-form-wizard.md .wizard-icon-circle,
    .vue-form-wizard .wizard-icon-circle .wizard-icon-container{
        outline: none;
    }
    .finish-button{
      background-color:#43A047 !important;
      border-color: #43A047 !important;
  }
</style>
